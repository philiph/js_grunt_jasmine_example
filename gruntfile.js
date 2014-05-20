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
      all: ['src/**/*.js', 'tests/**/*.js'],
      options: {
        curly: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'jasmine']);

};
