block('dev-def')(
    wrap()(function () {
        var ctx = this.ctx;
        return [
            {
                elem: 'box',
                content: 'test true'
            },
            ctx.text && {
                elem: 'text',
                content: ctx.text
            }
        ];
    })
)