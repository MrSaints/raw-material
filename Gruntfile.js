module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                files: {
                    "dist/raw-material.css": "src/core.scss"
                }
            }
        },
        clean: ["dist"],
        watch: {
            files: ["src/**/*"],
            tasks: ["build"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("build", ["clean", "sass"]);
    grunt.registerTask("build:dev", ["build", "watch"]);
}