module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'tests/**/*.js'
        }
      }
    },
    jshint: {
      all: ['src/**/*.js', 'tests/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'jasmine']);

};
