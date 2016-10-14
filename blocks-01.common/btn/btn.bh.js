module.exports = function (bh) {

    bh.match('btn', function (ctx, json) {

        //если нет модификатора color или link, тогда назначить модификатор по умолчанию
        if (json.mods.color !== false && json.mods.link !== true) {
            ctx.mod('color', 'default');
        }

        switch (ctx.tag()) {
            case 'button':
                ctx
                    .attr('type', 'submit');

                break;

            case 'input':
                ctx
                    .attr('type', 'submit');
                break;

            case 'a':
            default:
                ctx
                    .tag('a')
                    .attr('role', 'button')
                    .attr('href', json.url || '#');
        }
    });

};
