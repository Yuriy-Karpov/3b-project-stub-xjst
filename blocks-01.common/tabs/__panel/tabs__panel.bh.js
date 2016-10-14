module.exports = function (bh) {
    bh.match('tabs__panel', function (ctx, json) {
        ctx.cls(ctx.isFirst() ? 'active fade in': 'fade').attrs({
            role: 'tabpanel',
            id: json.id || ctx.generateId()
        });
    })
}