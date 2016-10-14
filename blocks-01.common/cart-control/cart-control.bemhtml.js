block('cart-control')(
    js()(true),
    content()(function () {
        var min = this.ctx.min || 0,
            max = this.ctx.max || false,
            buttonMinus = this.ctx.buttonMinus || '',
            buttonPlus = this.ctx.buttonPlus || '',
            isDisabled = this.mods.disabled || false,
            value = this.ctx.value || 0;
        return [
            {
                elem: 'button',
                elemMods: {'minus':true},
                tag: 'button',
                attrs: {
                    type: 'button'
                },
                content: buttonMinus
            },
            {
                elem: 'input',
                mods: {rer:'sg'},
                tag: 'input',
                attrs: {
                    disabled: isDisabled,
                    'data-min': min,
                    'data-max': max,
                    type: 'text',
                    value: value
                }
            },
            {
                elem: 'button',
                elemMods: {'plus':true},
                tag: 'button',
                attrs: {
                    type: 'button'
                },
                content: buttonPlus
            },
        ]
    })
)