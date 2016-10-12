block('demo-marked')(
    content()(function () {
        var fs = require('fs');
        var marked = fs.readFileSync('./html.docs/' + this.ctx.name + '/' + this.ctx.name + '.html', 'utf8');
        marked = marked.toString();
        return [
            {
                elem: 'readmore',
                content: 'подробнее'
            },
            {
                elem: 'readme',
                content: marked
            }
        ]
    })
)
