module.exports = function (bh) {
    bh.match('star-rating__input', function (ctx, json) {
        ctx.tag('input')
            .attrs({
                id:  json.id,
                type: 'radio',
                name: json.name,
                value: json.id
            })
    })
};