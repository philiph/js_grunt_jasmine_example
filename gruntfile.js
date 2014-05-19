module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: 'src/*.js',
        options: {
          specs: 'tests/*.spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jasmine']);

};
