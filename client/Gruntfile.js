module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 4200,
          base: 'app',
          keepalive: true,
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
    }
  });

  grunt.registerTask('server', function(target) {
    grunt.task.run([
      'configureProxies:server',
      'connect'
    ]);
  });

};
