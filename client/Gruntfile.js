module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 4200,
          base: 'dist',
          open: true,
          middleware: function (connect, options, defaultMiddleware) {
             var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
             return [
                // Include the proxy first
                proxy
             ].concat(defaultMiddleware);
          }
        },
        proxies: [
          {
            context: '/api',
            host: '127.0.0.1',
            port: 8080
          }
        ]
      }
    },

    concat: {
      js: {
        src: 'src/**/*.js',
        dest: 'dist/app.js'
      }
    },

    copy: {
      index: {
        files: [
          {
            src: 'src/index.html',
            dest: 'dist/index.html'
          }
        ]
      }
    },

    watch: {
      js: {
        files: 'src/**/*.js',
        tasks: 'concat:js'
      }
    }

  });

  grunt.registerTask('build', function(target) {
    grunt.task.run([
      'concat:js'
    ]);
  });

  grunt.registerTask('server', function(target) {
    grunt.task.run([
      'build',
      'configureProxies:server',
      'connect:server',
      'watch'
    ]);
  });

};
