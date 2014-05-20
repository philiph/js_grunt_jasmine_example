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
    },
    watch: {
      files: ['src/**/*.js', 'tests/**/*.js'],
      tasks: ['jshint', 'jasmine']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jasmine']);

};
