var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task("js", function() {
    gulp.src(["js/**/*.js","!js/min/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./js/min"));
});
