module.exports = function (bh) {
    bh.match('breadcrumb__active', function (ctx, json) {
        ctx.tag('li')
            .cls('active')
    })
}