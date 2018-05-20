module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 1900,
                        height: 1000,
                        quality: 60
                    }, {
                        width: 1200,
                        height: 867,
                        quality: 60
                    }, {
                        width: 1000,
                        height: 667,
                        quality: 60
                    }, {
                        width: 700,
                        height: 467,
                        quality: 60
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,JPG,PNG}'],
                    cwd: 'images_src/', //source folder
                    dest: 'images/'     //destination folder
                }]
            }
        },
  
        clean: {  //cleans the folder named images
            dev: {
                src: ['images'],
            },
        },

        mkdir: { //creates images folder if it is missing
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        imagemin: {
            dynami: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,PNG,JPG'],
                    dest: 'images/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['clean', 'mkdir', 'imagemin', 'responsive_images']);
};