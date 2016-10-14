block('radio').mod('custom', true)(
    content()(function () {
        var ctx = this.ctx,
            mods = this.mods,
            name = ctx.name || 'radio',
            value = ctx.value || '';

        return [
            {
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