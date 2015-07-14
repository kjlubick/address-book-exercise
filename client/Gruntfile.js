module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-angular-templates');

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
        dest: 'dist/js/app.js'
      },
      css: {
        src: 'src/**/*.css',
        dest: 'dist/css/app.css'
      }
    },

    ngtemplates: {
      addressBook: {
        cwd: 'src',
        src: ['**/*.html', '!index.html'],
        dest: 'dist/js/templates.js'
      }
    },

    bower_concat: {
      lib: {
        dest: 'dist/js/lib.js',
        cssDest: 'dist/css/lib.css'
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
      },
      css: {
        files: 'src/**/*.css',
        tasks: 'concat:css'
      },
      html: {
        files: 'src/**/*.html',
        tasks: ['copy', 'ngtemplates']
      }
    }

  });

  grunt.registerTask('build', function(target) {
    grunt.task.run([
      'concat',
      'bower_concat',
      'copy',
      'ngtemplates'
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
