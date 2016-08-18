module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: { 
					'dist/styles.css': 'SASS/styles.scss',
				}
			}
		},
		//Tarea para poneer prefijos de webkit moz etc
		postcss: {
            options: {
                map: true,
                processors: [

                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'dist/*.css'
            }
        },
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: 'sass/*.scss',
				tasks: ['sass', 'postcss:dist']
			},
			js: {
			    files: ['JS/*',
			        	'modules/about/*.js',
			        	'modules/home/*.js',
			        	'modules/specifications/*.js',],
			    tasks: ['concat']
			}
		},
		concat:{
			js:{
				src:[
			        	'Js/*',
			        	'modules/about/*.js',
			        	'modules/home/*.js',
			        	'modules/specifications/*.js',
			        ],
			    dest:'dist/scripts.min.js'
			}
		},
		uglify: {
		    my_target: {
			    files: {
			        'dist/scripts.min.js': [
			        	'js/*',
			        ]
			    }
		    }
		}
	})

	grunt.registerTask('default', ['watch'])
};