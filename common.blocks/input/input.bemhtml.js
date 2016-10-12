block('input')(
    tag()('input'),
    attrs()(function () {
        var type = this.ctx.type || 'text',
            id = this.ctx.id || false,
            disabled = this.mods.disabled || false,
            name = this.ctx.name || false,
            placeholder = this.ctx.placeholder || false;
        
        var attr = {
            type: type,
            id: id,
            disabled : disabled,
            placeholder: placeholder,
            name: name,
            value: this.ctx.content
        } 
        
        return attr;
    })
)