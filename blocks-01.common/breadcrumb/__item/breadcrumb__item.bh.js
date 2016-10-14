module.exports = function (bh) {
    bh.match('breadcrumb__item', function (ctx, json) {
        ctx.tag('li')
            .content({
                elem: 'link',
                tag: 'a',
                attrs: {
                    href: '#'
                },
                content: [
                    ctx.content()
                ]
            }, true)
    })
}