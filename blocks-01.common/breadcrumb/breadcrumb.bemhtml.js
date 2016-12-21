block('breadcrumb')(
    tag()('ol'),

    match(function () {
        // если нет контента, подставим стандартный
        return !this.ctx.content})(
        content()(function () {
            return [
                {
                    elem: 'item',
                    content: 'Главная'
                },
                {
                    elem: 'item',
                    content: 'Категория'
                },
                {
                    elem: 'active',
                    content: 'Товар'
                }
            ];

        })
    ),

    match(function () {
        // если передали массив строк

        var rules = false;
        if (typeof this.ctx.content !== "undefined" ) {
            rules = typeof this.ctx.content[0] === 'string'
        }
        return rules})(
        content()(function () {
            var arrContent = this.ctx.content,
                lastItemContent = arrContent.splice(-1, 1);
            var content = arrContent.map(function (item) {
                return [
                    {
                        elem: 'item',
                        content: item
                    }
                ]
            })
            return [
                content,
                {
                    elem: 'active',
                    content: lastItemContent
                }
            ]

        })
    )
)