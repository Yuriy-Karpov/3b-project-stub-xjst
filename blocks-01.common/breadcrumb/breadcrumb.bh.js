module.exports = function (bh) {
    bh.match('breadcrumb', function (ctx, json) {
        ctx.tag('ol')
        // если нет контента, подставим стандартный 
        if (!ctx.content()) {
            ctx.content([
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
                },
            ])
        }
        // если передали массив строк
        if (typeof ctx.content()[0] === 'string') {
            var arrContent = ctx.content(),
                lastItemContent = arrContent.splice(-1, 1);
            var content = arrContent.map(function (item) {
                return [
                    {
                        elem: 'item',
                        content: item
                    }
                ]
            })
            ctx.content([
                content,
                {
                    elem: 'active',
                    content: lastItemContent
                }
            ], true)
        }

    })
}