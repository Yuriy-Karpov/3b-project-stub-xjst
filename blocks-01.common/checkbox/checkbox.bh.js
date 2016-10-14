module.exports = function (bh) {
    bh.match('checkbox', function (ctx, json) {
        var $name = json.name || 'checkbox';
        var $value = json.value || '';
        if (!ctx.mod('custom')) {
            ctx.content({
                elem: 'label',
                content: [
                    {
                        elem: 'control',
                        attrs: {
                            type: 'checkbox',
                            name: $name,
                            checked : ctx.mod('checked'),
                            disabled : ctx.mod('disabled'),
                            value: $value
                        }
                    },
                    ctx.content()
                ]
            }, true);
        }
    })
}
