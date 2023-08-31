const { series, src, dest } = require('gulp');

function copySingleFile() {
    return src(['./index.html', './manifest.json', 'favicon.ico', './privacypolicy.html'])
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

function copyWinIconFile() {
    return src('./img/windows11/*')
        .pipe(dest('dist/img/windows11'))
}

function copyAndroidIconFile() {
    return src('./img/android/*')
        .pipe(dest('dist/img/android'))
}

function copyiOSIconFile() {
    return src('./img/ios/*')
        .pipe(dest('dist/img/ios'))
}

function copyScreenshot() {
    return src('./screenshot/*')
        .pipe(dest('dist/screenshot'))
}

exports.default = series(copySingleFile, copyCSSFile, copyJSFile, copyIconFile, copyWinIconFile, copyAndroidIconFile, copyiOSIconFile, copyScreenshot)