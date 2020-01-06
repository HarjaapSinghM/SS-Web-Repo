const gulp = require("gulp");

const imagemin = require("gulp-imagemin");

function imgSquash() {
    return gulp 
        .src("tourourhomes/projects/cresthaven-glamour/images/*")
        .pipe(imagemin({ progressive: true, optimizationLevel: 7 }))
        .pipe(gulp.dest("tourourhomes/projects/cresthaven-glamour/minified"));
}

gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => {
    gulp.watch("tourourhomes/projects/cresthaven-glamour/images/*", imgSquash);
});

gulp.task("default", gulp.series("imgSquash", "watch"));

