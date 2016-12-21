module.exports = function (bh) {
    bh.match('filter-slider__input-max', function (ctx, json) {
        var max = json.max || '10000',
            value = json.value || ''
        ctx.tag('input')
            .attrs({
                'data-price-max': max,
                value: value,
                type: 'text',
                placeholder: max
            })
    })
}