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
					'client/dist/styles.css': 'client/SASS/styles.scss',
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
                src: 'client/dist/*.css'
            }
        },
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: 'client/sass/*.scss',
				tasks: ['sass', 'postcss:dist']
			},
			js: {
			    files: ['client/JS/*',
			        	'client/modules/login/*.js',
			        	'client/modules/signin/*.js',
			        	'client/modules/profile/*.js',
			        	'client/modules/home/*.js',
			        	'client/modules/home/searcher/*.js',
			        	'client/modules/home/moods/*.js',
			        	'client/modules/home/list-films/*.js',
			        	'client/modules/home/questions/*.js',
			        	'client/modules/specifications/*.js',],
			    tasks: ['concat']
			}
		},
		concat:{
			js:{
				src:[
			        	'client/Js/*',
			        	'client/modules/login/*.js',
			        	'client/modules/signin/*.js',
			        	'client/modules/profile/*.js',
			        	'client/modules/home/*.js',
			        	'client/modules/home/searcher/*.js',
			        	'client/modules/home/moods/*.js',
			        	'client/modules/home/list-films/*.js',
			        	'client/modules/home/questions/*.js',
			        	'client/modules/specifications/*.js',
			        ],
			    dest:'client/dist/scripts.min.js'
			}
		},
		uglify: {
		    my_target: {
			    files: {
			        'client/dist/scripts.min.js': [
			        	'js/*',
			        ]
			    }
		    }
		}
	})

	grunt.registerTask('default', ['watch'])
};