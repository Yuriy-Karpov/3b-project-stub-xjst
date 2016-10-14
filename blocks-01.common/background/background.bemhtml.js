block('background')(
    attrs()(function () {
        var url = this.ctx.mods.url;

        return url ? {style: 'background-image: url(\'' + url + '\')'} : false;
    })
)