block('select')(
    tag()('select'),
    match(function() {
        return typeof this.ctx.content[0] === 'string' })(
        content()(function () {
            var content = this.ctx.content.map(function (item) {
                return [
                    {
                        elem: 'option',
                        bem: false,
                        tag: 'option',
                        content: item
                    }
                ]
            })
            return content;

        })
    )
)