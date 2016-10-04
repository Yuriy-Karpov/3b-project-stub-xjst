var fs = require('fs'),
    path = require('path'),
    techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),
        borschikJsIncludeTech: require('enb-borschik/techs/js-borschik-include'),
        // css
        sass: require('enb-sass/techs/css-sass'),

        // js
        browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        // bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html'),

        replaceBemClass: require('./techs/replace-bem-class')
    },
    enbBemTechs = require('enb-bem-techs'),
    merged = require('./techs/merged'),
    levels = [
        {path: 'libs/bem-core/common.blocks', check: false},
        {path: 'libs/bem-core/desktop.blocks', check: false},
        // {path: 'libs/bem-components/common.blocks', check: false},
        // {path: 'libs/bem-components/desktop.blocks', check: false},
        // {path: 'libs/bem-components/design/common.blocks', check: false},
        // {path: 'libs/bem-components/design/desktop.blocks', check: false},
        'common.blocks',
        'desktop.blocks'
    ];

module.exports = function (config) {
    var isProd = process.env.YENV === 'production',
        mergedBundleName = '_merged',
        pathToMargedBundle = path.join('desktop.bundles', mergedBundleName);

    fs.existsSync(pathToMargedBundle) || fs.mkdirSync(pathToMargedBundle);

    merged(config, pathToMargedBundle);

    config.nodes('*.bundles/*', function (nodeConfig) {
        var isMergedNode = path.basename(nodeConfig.getPath()) === mergedBundleName;

        isMergedNode || nodeConfig.addTechs([
            [techs.fileProvider, {target: '?.bemjson.js'}],
            [enbBemTechs.bemjsonToBemdecl]
        ]);
        
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {levels: levels}],
            // [techs.fileProvider, {target: '?.bemjson.js'}],
            // [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.sass, {
                sass: {outputStyle: 'expanded'},
            }],

            // bemtree
            // [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                forceBaseTemplates: true
            }],

            // html
            [techs.bemjsonToHtml],

            // replace bootstrap class
            [techs.replaceBemClass],
            
            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js']
            }],

            // js
            [techs.browserJs, {includeYM: true}],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js']
            }],

            // borschik

            // Собираем JS-файл, состоящий из `borschik:include`
            // [techs.borschikJsIncludeTech, { target: '?.pre.js' }],
            // Обрабатываем собранный JS-файл, раскрываем найденные `borschik:include`
            //
            // [techs.borschik, {
            //     target: '?.js',
            //     source: '?.pre.js'
            // }]
            [techs.borschik, {source: '?.js', target: '?.min.js', minify: isProd}],
            [techs.borschik, {source: '?.css', target: '?.min.css', minify: isProd}]
        ]);

        isMergedNode || nodeConfig.addTargets(['?.b2.html', '?.html']);
        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.min.css', '?.min.js']);
        
    });
};
