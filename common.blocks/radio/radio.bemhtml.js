block('radio')(
    content()(function () {
        var ctx = this.ctx,
            mods = this.mods,
            name = ctx.name || 'radio',
            value = ctx.value || '',
            content = '';

        if (!mods.custom) {
            content = {
                elem: 'label',
                content: [
                    {
                        elem: 'control',
                        attrs: {
                            type: 'radio',
                            name: name,
                            checked : mods.checked,
                            disabled : mods.disabled,
                            value: value
                        }
                    },
                    ctx.content
                ]
            }
            return content
        }
    })
)