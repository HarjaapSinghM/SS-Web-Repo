const gulp = require("gulp");

const imagemin = require("gulp-imagemin");

function imgSquash() {
    return gulp 
        .src("tourourhomes/beforeafter/images/*")
        .pipe(imagemin({ progressive: true, optimizationLevel: 7 }))
        .pipe(gulp.dest("tourourhomes/beforeafter/minified"));
}

gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => {
    gulp.watch("tourourhomes/beforeafter/images/*", imgSquash);
});

gulp.task("default", gulp.series("imgSquash", "watch"));