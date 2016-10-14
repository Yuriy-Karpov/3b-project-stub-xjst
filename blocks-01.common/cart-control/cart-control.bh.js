module.exports = function (bh) {
    bh.match('cart-control', function (ctx, json) {
        var $hide = json.hide;
        ctx.content([
            {
                elem: 'minus',
                tag: 'a',
                attrs: {
                    href: 'javascript:void(0)',
                    rel: 'nofollow'
                }
            },
            {
                elem: 'input',
                tag: 'input',
                attrs: {
                    disabled: true,
                    'data-min': '1',
                    'data-max': '10',
                    type: 'text',
                    value: '1'
                }
            },
            {
                elem: 'plus',
                tag: 'a',
                attrs: {
                    href: 'javascript:void(0)',
                    rel: 'nofollow'
                }
            },

        ], true);
        if ($hide) {
            return null;
        }
    })
}
