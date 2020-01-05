const gulp = require("gulp");

const imagemin = require("gulp-imagemin");

function imgSquash() {
    return gulp 
        .src("tourourhomes/projects/richmond-hill-radiance/images/*")
        .pipe(imagemin({ progressive: true, optimizationLevel: 7 }))
        .pipe(gulp.dest("tourourhomes/projects/richmond-hill-radiance/minified"));
}

gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => {
    gulp.watch("tourourhomes/projects/richmond-hill-radiance/images/*", imgSquash);
});

gulp.task("default", gulp.series("imgSquash", "watch"));

