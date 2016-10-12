module.exports = function (bh) {
    bh.match('select_size_lg', function (ctx, json) {
        var oldCls = ctx.cls() || '';
        ctx.cls(oldCls + ' ' + 'input-lg', true)
    });

    bh.match('select_size_sm', function (ctx, json) {
        var oldCls = ctx.cls() || '';
        ctx.cls(oldCls + ' ' + 'input-sm', true)
    })
}