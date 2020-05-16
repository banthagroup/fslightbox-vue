import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

function buildCSS() {
    return (
        gulp.src('./src/scss/index.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(rename('index.css'))
            .pipe(gulp.dest('./src/css'))
    );
}

function copyPackageFiles() {
    return gulp.src([
        './index.js',
        './package.json',
        './README.md'
    ]).pipe(gulp.dest('./dist'))
}

const dist = gulp.series(buildCSS, copyPackageFiles);

export {
    dist
}

export default dist;
