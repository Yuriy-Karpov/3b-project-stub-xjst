block('select__option')(
    bem()(false),
    tag()('option'),
    attrs()(function () {
        var attrs = {
            value: this.ctx.value || false,
            selected: this.mods.selected || false,
            disabled: this.mods.disabled || false
        }
        return attrs;
    })
)