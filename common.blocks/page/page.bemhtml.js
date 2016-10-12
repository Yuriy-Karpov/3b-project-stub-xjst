block('page')(
    def()(function () {

        return applyCtx([
            {tag: 'body', content: [this.ctx.content, this.ctx.scripts]}]
        );

    }),
    wrap()(function () {
        var ctx = this.ctx;
        this._nonceCsp = ctx.nonce;

        // var config = require('../../../config'),
        //     languages = config.languages;
        var languages = 'ru';

        // var responsive = config.responsive === true ? true : false,
        var responsive = true,
            lang = ctx.lang || languages,
            noscriptWarning = ctx.noscriptWarning || 'В вашем браузере отключен JavaScript. Многие элементы сайта могут работать некорректно.',
            oldBrowserWarning = ctx.oldBrowserWarning || 'Вы используете <strong>устаревший</strong> браузер. Пожалуйста <a rel="nofollow" onclick="window.open(this.href, \'_blank\');return false;" href="http://browsehappy.com/">обновите свой браузер</a> чтобы улучшить взаимодействие с сайтом.';

        var favicons = ctx.favicons || [
                {elem: 'favicon', url: '../../../favicons/touch-icon-180x180-iphone-6-plus.png', size: '180x180'},
                {elem: 'favicon', url: '../../../favicons/touch-icon-152x152-ipad-retina.png', size: '152x152'},
                {elem: 'favicon', url: '../../../favicons/touch-icon-120x120-iphone-retina.png', size: '120x120'},
                {elem: 'favicon', url: '../../../favicons/touch-icon-76x76-ipad.png', size: '76x76'},
                {elem: 'favicon', url: '../../../favicons/touch-icon-57x57-iphone.png', size: '57x57'},
                {elem: 'favicon', url: '../../../favicons/favicon-32x32.png', size: '32x32'},
                {elem: 'favicon', url: '../../../favicons/favicon.ico', size: '16x16'},
            ];

        return [
            ctx.doctype || '<!DOCTYPE html>',
            {
                tag: 'html',
                cls : 'ua_js_no',
                attrs: {
                    lang: lang
                },
                content: [
                    {
                        elem: 'head',
                        content: [
                            {tag: 'meta', attrs: {charset: 'utf-8'}},
                            ctx.uaCompatible === false ? '' : {
                                tag: 'meta',
                                attrs: {
                                    'http-equiv': 'X-UA-Compatible',
                                    content: ctx.uaCompatible || 'IE=edge'
                                }
                            },
                            responsive ? {
                                elem: 'meta',
                                attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}
                            } : '',
                            {elem: 'meta', attrs: {name: 'format-detection', content: 'telephone=no'}},
                            {elem: 'meta', attrs: {name: 'SKYPE_TOOLBAR', content: 'SKYPE_TOOLBAR_PARSER_COMPATIBLE'}},
                            {tag: 'title', content: ctx.title},
                            {block: 'ua', attrs: {nonce: ctx.nonce, 'data-skip-moving': "true"}},
                            {block: 'ua', elem: 'modern'},
                            ctx.head,
                            ctx.styles,
                            ctx.favicon ? {elem: 'favicon', url: ctx.favicon} : favicons,
                            {elem: 'js', url: '../../libs/jquery/dist/jquery.min.js'},
                        ]
                    },
                    '<!--noindex-->',
                    {elem: 'noscript', content: noscriptWarning},
                    {elem: 'browsehappy', content: oldBrowserWarning},
                    '<!--/noindex-->',
                    ctx
                ]
            }
        ];
    }),


    content()(function () {
        return [
            applyNext(),
            this.ctx.scripts
        ];
    }),

    elem('head')(
        bem()(false),
        tag()('head')
    ),

    elem('meta')(
        bem()(false),
        tag()('meta')
    ),

    elem('link')(
        bem()(false),
        tag()('link')
    ),

    elem('favicon')(
        bem()(false),
        tag()('link'),
        attrs()(function () {
            var rel = 'shortcut icon';
            if (this.ctx.size && this.ctx.size !== '16x16' && this.ctx.size !== '32x32') {
                rel = 'apple-touch-icon';
            }
            return {
                rel: rel,
                href: this.ctx.url};
        })
    )
);
