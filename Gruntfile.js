module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        postcss: {
            options: {
                map: true,
                processors: [
                    require("postcss-nested"),
                    require("csstyle")
                ]
            },
            dist: {
                expand: true,
                flatten: true,
                src: "src/*.css",
                dest: "dist/"
            }
        },
        watch: {
            files: ["src/*.css"],
            tasks: ["build"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("build", ["postcss"]);
}