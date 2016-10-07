module.exports = {
    block : 'page',
    title : 'Title of the page',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '../_merged/_merged.css' },
    ],
    scripts: [{ elem : 'js', url : '../_merged/_merged.min.js' }],
    content : [
        {
            block : 'header',
            content : [
              
            ]
        },
        {
            block: 'jquery-window'
        },
        {
            block : 'container',
            content : [
                {
                    block: 'dev',
                    mods: {color: 'green'},
                    js: true,
                    content: 'demo dev'
                },
                {
                    block: 'btn',
                    content: 'кнопка'
                },
                {
                    block: 'checkbox',
                    name: 'newcheckbox',
                    content: 'checkbox'
                },
                {
                    block: 'checkbox',
                    mods: {custom: true},
                    content: 'custom checkbox'
                },
                {
                    block: 'img',
                    url: 'https://pbs.twimg.com/profile_images/3563995166/d0ee78b79b5d806a31c757126e7afe65.png'
                },
                {
                    block: 'img',
                    mods: {lazyload:true},
                    url: 'https://pbs.twimg.com/profile_images/3563995166/d0ee78b79b5d806a31c757126e7afe65.png'
                },
                {
                    block: 'alert',
                    content: 'alert'
                },
                {
                    block: 'breadcrumb',
                    content: [
                        {
                            elem: 'active',
                            content: 'main'
                        },
                        {
                            elem: 'item',
                            content: 'breadcrumb'
                        }
                    ]
                },
                {
                    block: 'cart-control'
                }
            ]
        },
        {
            block : 'footer',
            content : [

            ]
        }
    ]
};
