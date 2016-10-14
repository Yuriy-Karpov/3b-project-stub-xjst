module.exports = function (bh) {
    bh.match('radio__control', function (ctx, json) {
        ctx.tag('input');
    })
}