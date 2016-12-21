module.exports = function (bh) {
    bh.match('filter-slider__input-min', function (ctx, json) {
        var min = json.min || '0',
            value = json.value || ''
        ctx.tag('input')
            .attrs({
                'data-price-min': min,
                value: value,
                type: 'text',
                placeholder: min
            })
    })
}