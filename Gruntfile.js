module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass',
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'], 
          dest: 'img/small_size/'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false
        },
      }
    },

    browserSync: {
      bsFiles: {
        src : ['**/*.{css,html}'],

      },

      options: {
          watchTask: true,
          server: './',
          browser: "firefox"
      }
    },

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'sass', 'imagemin', 'watch']);
};