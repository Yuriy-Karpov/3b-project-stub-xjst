module.exports = function (bh) {
    bh.match('checkbox__control', function (ctx, json) {
        ctx.tag('input');
    })
}