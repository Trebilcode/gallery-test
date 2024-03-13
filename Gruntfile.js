module.exports = function (grunt) {
    grunt.initConfig({
        package: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'dist/js/script.js': 'src/js/script.js'
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{                         // Dictionary of files
                    'dist/css/styles.css': 'src/scss/styles.scss',       // 'destination': 'source'
                }]
            }
        },
        uglify: {
            t1: {
                files: [
                    {
                        src: 'dist/js/script.js',
                        dest: 'dist/js/script.min.js'
                    }
                ]
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        src: 'dist/css/styles.css',
                        dest: 'dist/css/styles.min.css'
                    }
                ]
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            target: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'dist/index.html'
                    }
                ]
            }
        },
        watch: {
            files: ['src/*.html', 'dist/css/styles.min.css', 'src/scss/*scss', 'src/js/*.js', 'Gruntfile.js'],
            tasks: ['htmlmin', 'sass', 'cssmin', 'babel', 'uglify'],
            options: {
                livereload: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: {
                        path: 'dist/',
                        options: {
                            index: 'index.html'
                        }
                    },
                    open: true
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-babel');
}