

const gulp = require('gulp')
const typescript = require('gulp-typescript')
const rimraf = require('rimraf')
//const rename = require('gulp-rename')


gulp.task('compoler:ts', function() {
    return gulp.src("./src/**/*.ts")
        .pipe(typescript( typescript.createProject("./src/tsconfig.json") ))
        .pipe(gulp.dest('build/serve'))
})

gulp.task('build:html',function() {
    return gulp.src("./src/test_page/**/*.html")
        .pipe(gulp.dest('build/serve/test_page'))
})

gulp.task('default',['compoler:ts','build:html']);