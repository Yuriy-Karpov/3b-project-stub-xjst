module.exports = function (bh) {
    bh.match('breadcrumb', function (ctx, json) {
        ctx.tag('ol')
    })
}