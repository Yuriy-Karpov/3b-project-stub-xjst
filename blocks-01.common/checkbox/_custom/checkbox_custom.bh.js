module.exports = function (bh) {
    bh.match('checkbox_custom', function (ctx, json) {
        var $name = json.name || '';
        var $value = json.value || '';
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
                {
                    elem: 'input',
                    tag: 'span'
                },
                ctx.content()
            ]
        }, true);
    })
}
