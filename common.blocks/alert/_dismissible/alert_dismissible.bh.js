module.exports = function(bh) {

    bh.match('alert_dismissible', function(ctx, json) {
        ctx.content([
            {
                tag: 'button',
                cls: 'close',
                attrs: {
                    type: 'button',
                    'data-dismiss': 'alert',
                    'aria-label': 'X'
                },
                content: [{
                    tag: 'span',
                    attrs: {
                        'aria-hidden': 'true'
                    },
                    content: '&times;'
                }]
            },
            ctx.content()
        ], true);
    });
};
