var fs = require('fs'),
    path = require('path'),
    techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        // postcss: require('enb-postcss/techs/enb-postcss'),
        // postcssPlugins: [
        //     require('postcss-import')(),
        //     require('postcss-each'),
        //     require('postcss-for'),
        //     require('postcss-simple-vars')(),
        //     require('postcss-calc')(),
        //     require('postcss-nested'),
        //     require('rebem-css'),
        //     require('postcss-url')({ url: 'inline' }),
        //     require('autoprefixer')(),
        //     require('postcss-reporter')()
        // ],

        cssSass: require('./techs/css-sass'),
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
        'blocks-00.supported',
        'blocks-00.unsupported',
        'blocks-01.common',
        'blocks-02.components',
        'blocks-03.project'
    ];
// TODO: responsive временно для разработке
var responsive = true,
    browsers = [
        "Explorer >= 11",
        "Firefox >= 421",
        "Opera >= 15",
        "Chrome >= 27",
        "Safari >= 8",
        "Android >= 4",
        "iOS >= 8"
    ];
/**
 * Пути используемые в сборке
 */
var globalsScssPath = path.join('globals', 'globals.scss');

module.exports = function(config) {
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
            // [techs.postcss, {
            //     target: '?.css',
            //     oneOfSourceSuffixes: ['post.css', 'css'],
            //     plugins: techs.postcssPlugins
            // }],
            [techs.cssSass, {
                sass: {outputStyle: 'expanded'},
                responsive: responsive,
                globals: [globalsScssPath],
                autoprefixer: {browsers: browsers}
            }],
            // bemtree
            // [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                forceBaseTemplates: true,
                engineOptions : { elemJsInstances : true }
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
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                engineOptions : { elemJsInstances : true }
            }],

            // js
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js']
            }],

            // borschik
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            // убираем борщик т.к. данный функционал реализован в  techs.cssSass
            // [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }]

        ]);

        isMergedNode || nodeConfig.addTargets(['?.b2.html', '?.html']);

        nodeConfig.addTargets([/* '?.bemtree.js', */ '?.min.css', '?.min.js']);
    });
};
