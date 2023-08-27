const { series, src, dest } = require('gulp');

function copySingleFile() {
    return src(['./index.html', './manifest.json', 'favicon.ico'])
        .pipe(dest('dist'))
}

function copyCSSFile() {
    return src('./css/*.css')
        .pipe(dest('dist/css'))
}

function copyJSFile() {
    return src('./js/*')
        .pipe(dest('dist/js'))
}

function copyIconFile() {
    return src('./img/*')
        .pipe(dest('dist/img'))
}

function copyScreenshot() {
    return src('./screenshot/*')
        .pipe(dest('dist/screenshot'))
}

exports.default = series(copySingleFile, copyCSSFile, copyJSFile, copyIconFile, copyScreenshot)