block('ul')(
    tag()('ul'),
    match(function() {
        return typeof this.ctx.content[0] === 'string' })(
        content()(function () {
            var content = this.ctx.content.map(function (item) {
                return [
                    {
                        elem: 'li',
                        tag: 'li',
                        content: item
                    }
                ]
            })
            return content;

        })
    )

)
