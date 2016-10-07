var enb = require('enb'),
    beautifyHtml = null,
    bootLint = null,
    vowFs = require('enb/lib/fs/async-fs'),
    replaceObj = require('../../replaceObj'),
    buildFlow = require('enb/lib/build-flow');

module.exports = buildFlow.create()
    .name('replace-bem-class')
    .target('target', '?.b2.html')
    .useSourceFilename('htmlFile', '?.html')
    .builder(function (htmlFileName) {

        var _this = this;
        if (null === beautifyHtml)
            beautifyHtml = require('js-beautify').html;


        return vowFs.read(htmlFileName, 'utf-8')
            .then(function (html) {

                for (var key in replaceObj) {
                    // если есть вероятность, что на странице не будет заменяемых классов, 
                    // тогда раскомментируем проверку
                    // if (!html.match(/key/g)) {
                    html = html.replace(new RegExp(key, 'g'), replaceObj[key])
                    // }
                }
                var beauty = beautifyHtml(html, {})
                    .replace(/\s*\/\* beautify preserve:start \*\//g, '')
                    .replace(/\/\* beautify preserve:end \*\/\s*/g, '');

                return beauty;
            });


    })
    .createTech();
