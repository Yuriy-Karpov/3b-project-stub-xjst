module.exports = function (bh) {
    bh.match('star-rating', function (ctx, json) {
        var prefix = (ctx.generateId()) + '-';
        var bemjson;
        if (json.mods.disabled) {
            bemjson = {
                elem: 'wrap',
                content: [
                    {
                        elem: 'input',
                        name: prefix,
                        attrs: {
                            disabled: true
                        },
                        id: prefix + '5'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '5'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        attrs: {
                            disabled: true
                        },
                        id: prefix + '4'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '4'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        attrs: {
                            disabled: true,
                            checked: 'checked'
                        },
                        id: prefix + '3'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '3'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        attrs: {
                            disabled: true
                        },
                        id: prefix + '2'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '2'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        attrs: {
                            disabled: true
                        },
                        id: prefix + '1'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '1'
                    }
                ]
            }
        } else {
            bemjson = {
                elem: 'wrap',
                content: [
                    {
                        elem: 'input',
                        name: prefix,
                        id: prefix + '5'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '5'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        id: prefix + '4'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '4'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        id: prefix + '3'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '3'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        id: prefix + '2'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '2'
                    },
                    {
                        elem: 'input',
                        name: prefix,
                        id: prefix + '1'
                    },
                    {
                        elem: 'icon',
                        for: prefix + '1'
                    }
                ]
            }
        }
        ctx.content([
            bemjson
        ])
    })
};