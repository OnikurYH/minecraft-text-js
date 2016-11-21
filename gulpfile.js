const gulp = require("gulp")
const babel = require("gulp-babel")
const eslint = require("gulp-eslint")
const uglify = require("gulp-uglify")
const rename = require("gulp-rename")

gulp.task("js", function () {
  return gulp.src("src/minecraft_text.js")
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(gulp.dest("dist"))
  .pipe(uglify({
    preserveComments: "license"  
  }))
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest("dist"));
})

gulp.task("default", ["js"])