block('img').mod('lazyload', true)(
    mix()([{block: 'lazyload'}]),
    attrs()(function () {
        var url = this.ctx.url;
        return {
            'data-src': url,
            'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        }
    })
)