block('img')(
    tag()('img'),
    attrs()(function () {
        var ctx = this.ctx,
            alt = ctx.alt || '',
            url = ctx.url || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        return this.extend(applyNext(),
            {
                src : url,
                width : ctx.width,
                height : ctx.height,
                alt : alt,
                title : ctx.title
            });
    })
)