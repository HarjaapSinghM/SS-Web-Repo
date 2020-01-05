const gulp = require("gulp");

const imagemin = require("gulp-imagemin");

function imgSquash() {
    return gulp 
        .src("tourourhomes/projects/oakville-modern-luxury/images/*")
        .pipe(imagemin({ progressive: true, optimizationLevel: 7 }))
        .pipe(gulp.dest("tourourhomes/projects/oakville-modern-luxury/minified"));
}

gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => {
    gulp.watch("tourourhomes/projects/oakville-modern-luxury/images/*", imgSquash);
});

gulp.task("default", gulp.series("imgSquash", "watch"));

