const { series, src, dest } = require('gulp');
const workbox = require('workbox-build');

// 复制所有文件到制品目标
function copyFiles() {
    return src([
        './src/index.html',
        './src/favicon.ico',
        './src/manifest.json',
        './src/privacypolicy.html',
        './src/.well-known/**/*',
        './src/css/**/*',
        './src/js/**/*',
        './src/img/**/*',
        './src/screenshot/**/*'
    ], { base: './src' })
        .pipe(dest('./dist'))
}

// 生成 Service Worker
function generateServiceWorker() {
    return workbox.generateSW({
        clientsClaim: true,
        skipWaiting: true,
        globDirectory: 'dist/',
        globPatterns: [
            '**/*.{css,ico,png,html,js,json}'
        ],
        globIgnores: [
            'screenshot/*',
            'img/windows11/*',
            'img/ios/*',
            'img/android/*'
        ],
        swDest: 'dist/sw.js',
        ignoreURLParametersMatching: [
            /^utm_/,
            /^fbclid$/
        ]
    })
}

exports.default = series(
    copyFiles,
    generateServiceWorker
)