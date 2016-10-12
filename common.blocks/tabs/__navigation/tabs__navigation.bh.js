module.exports = function (bh) {
    bh.match('tabs__navigation', function (ctx, json) {
        var tpl = [];

        var content = ctx.tParam('CONTENT');

        for(var i = 0; i < content.length; i++)
            tpl.push({
                tag: 'li',
                mix: i==0 && {block: 'active'},
                content: {
                    tag: 'a',
                    attrs: {
                        href: '#' + content[i].id,
                        role: 'tab',
                        'data-toggle': 'tab'
                    },
                    content: content[i].title
                }
            })

        ctx.tag('ul').attr('role', 'tablist').content(tpl, true);
    })
}