const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const sassGlob = require("gulp-sass-glob");
const rename = require("gulp-rename");
const ejs = require("gulp-ejs");
const replace = require("gulp-replace");

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
// ejs
gulp.task("ejs",function(){
    return gulp.src(["ejs/**/*.ejs", '!' + "ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(rename({ extname: ".html" }))
    .pipe( gulp.dest( "./" ) );
})

// ファイルの監視
gulp.task('default', function(){
    gulp.watch('sass/**/*scss', gulp.task('sass'));
    gulp.watch( "ejs/*ejs", gulp.series( "ejs" ) );
});