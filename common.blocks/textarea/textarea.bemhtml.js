block('textarea')(
    tag()('textarea'),
    mix()([{block: 'form-control'}]),
    attrs()(function () {
        return {
            rows: this.ctx.rows,
            placeholder: this.ctx.placeholder
        }
    })
)