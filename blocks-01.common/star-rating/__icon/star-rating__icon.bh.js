module.exports = function (bh) {
    bh.match('star-rating__icon', function (ctx, json) {
        ctx.tag('label')
            .mix([
                {block: 'fa'},
                {block: 'fa-star'}
            ])
            .attrs({
                for: json.for
            })
    })
}