module.exports = function (bh) {
    bh.match('tabs', function (ctx, json) {
        bh._options.replacements['tabs__content'] = 'tab-content';
        bh._options.replacements['tabs__panel'] = 'tab-pane';


        for(var i = 0; i < ctx.content().length; i++)
            ctx.content()[i].id = ctx.content()[i].id || ctx.generateId()

        ctx.tParam('CONTENT', ctx.content());


        ctx.content([
            {elem: 'navigation'},
            {
                elem: 'content',
                content: ctx.content()
            }
        ], true);
    })
}