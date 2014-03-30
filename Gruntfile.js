'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        mxmlc: {
            options: {
                rawConfig: '-library-path+=bower_components/FlashWarp/dist'
            },
            mxmlc: {
                files: {
                    'app/bin/App.swf': ['app/src/**/*.mxml']
                }
            }
        },

        clean: {
            options: {
                force: true
            },
            binaries: ['app/bin/*.*'],
        }
    });

    grunt.loadNpmTasks('grunt-mxmlc');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'mxmlc']);
};
