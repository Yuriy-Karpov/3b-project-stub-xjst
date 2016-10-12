module.exports = function (bh) {
    bh.match('radio', function (ctx, json) {
        var $name = json.name || 'radio';
        var $value = json.value || '';
        if (!ctx.mod('custom')) {
            ctx.content({
                elem: 'label',
                content: [
                    {
                        elem: 'control',
                        attrs: {
                            type: 'radio',
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
};
