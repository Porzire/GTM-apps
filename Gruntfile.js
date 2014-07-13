module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        useminPrepare: {
            html: 'src/index.html',
            options: {
                src: 'src',
                dest: 'dist'
            }
        },
        copy: {
            dist: {
                files: [{
                    src: 'src/index.html',
                    dest: 'dist/index.html'
                }]
            }
        },
        usemin: {
            html: ['dist/index.html'],
            css: ['dist/css/style.css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('default', ['useminPrepare', 'concat', 'copy', 'uglify', 'cssmin', 'usemin']);
};
