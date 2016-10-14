block('checkbox').mod('custom', true)(
    content()(function () {
        var ctx = this.ctx,
            mods = this.mods,
            name = ctx.name || 'checkbox',
            value = ctx.value || '';

        return [
            {
                elem: 'label',
                content: [
                    {
                        elem: 'control',
                        attrs: {
                            type: 'checkbox',
                            name: name,
                            checked : mods.checked,
                            disabled : mods.disabled,
                            value: value
                        }
                    },
                    {
                        elem: 'input',
                        tag: 'span'
                    },
                    ctx.content
                ]
            }
        ]
    })
)