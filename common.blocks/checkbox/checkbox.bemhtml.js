block('checkbox')(
    content()(function () {
        var ctx = this.ctx,
            mods = this.mods,
            name = ctx.name || 'checkbox',
            value = ctx.value || '',
            content = '';
        
        if (!mods.custom) {
            content = {
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
                    ctx.content
                ]
            }
            return content
        }
        

    })
)