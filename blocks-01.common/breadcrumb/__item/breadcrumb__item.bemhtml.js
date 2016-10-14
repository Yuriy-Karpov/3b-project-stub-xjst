block('breadcrumb__item')(
    tag()('li'),
    content()(function () {
        var ctx = this.ctx;
        return {
            elem: 'link',
            tag: 'a',
            attrs: {
                href: '#'
            },
            content: ctx.content
        }
    })
)