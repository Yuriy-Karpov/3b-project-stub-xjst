module.exports = function (bh) {
    bh.match('checkbox__label', function (ctx, json) {
        ctx.bem(false)
            .tag('label');
    })
}