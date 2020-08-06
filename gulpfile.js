const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const sassGlob = require("gulp-sass-glob");

// sass
gulp.task("sass", function() {
return (
    gulp
    .src("sass/**/*scss")
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(sassGlob())
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css"))
);
});
gulp.task('watch', function(){
    gulp.watch('sass/**/*scss', gulp.task('sass'));
});