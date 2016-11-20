const gulp = require("gulp")
const babel = require("gulp-babel")
const eslint = require("gulp-eslint");

gulp.task("js", function () {
  return gulp.src("src/**/*.js")
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(gulp.dest("dist"));
})

gulp.task("default", ["js"])