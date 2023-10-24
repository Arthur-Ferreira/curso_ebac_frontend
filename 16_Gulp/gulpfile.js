const { series } = require('gulp');

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');

module.exports.default = series(appHTML, appCSS, appJS, appIMG);

    