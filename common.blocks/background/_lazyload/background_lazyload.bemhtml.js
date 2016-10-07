block('background_lazyload').mod('lazyload', true)(
    mix()([{block: 'lazyload'}]),
    attrs()(function () {
        var ctx = this.ctx,
            url = ctx.url,
            attr;

        if (typeof url === 'object') {
            var bgset = [];
            Object.keys(url).forEach(function (key) {
                bgset.push(url[key] + ' [' + key + ']');
            });
            bgset = bgset.join(' | ');
            attr = {
                'data-bgset': bgset,
                'style': false
            }
        } else {
            attr = {
                'data-bg': url,
                'style': false
            }
        }
        return attr;
    })
)