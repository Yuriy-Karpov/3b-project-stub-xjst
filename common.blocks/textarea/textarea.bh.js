module.exports = function (bh) {
    bh.match('textarea', function (ctx, json) {
        ctx
            .tag('textarea')
            .mix([{block: 'form-control'}])
            .attrs({
                rows: json.rows,
                placeholder: json.placeholder
            })
    })
}
