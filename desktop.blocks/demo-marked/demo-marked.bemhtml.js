block('demo-marked')(
    content()(function () {
        var fs = require('fs');
        var marked = fs.readFileSync('./html.docs/' + this.ctx.name + '/' + this.ctx.name + '.html', 'utf8');
        var id = 'modal-' + this.ctx.name;
        marked = marked.toString();
        return [
            {
                elem: 'readmore',
                tag: 'button',
                attrs: {
                    type: 'button',
                    'data-toggle': 'modal',
                    'data-target': '#' + id
                },
                content: 'подробнее'
            },
            {
                elem: 'readme',
                mix: [{block: 'modal'},{block: 'fade'}],
                attrs: {
                    id: id
                },
                content: [
                    {
                        elem: 'dialog',
                        mix: [{block: 'modal-dialog'}, {block: 'modal-lg'}],
                        content: [
                            {
                                elem: 'content',
                                mix: [{block: 'modal-content'}],
                                content: [
                                    {
                                        elem: 'body',
                                        mix: [{block: 'modal-body'}],
                                        content: marked
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })
)
