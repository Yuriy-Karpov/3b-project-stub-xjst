module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'dev.css' },
    ],
    scripts: [{ elem : 'js', url : 'dev.min.js' }],
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
            block : 'content',
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
                    block: 'dev-def',
                    text: 'tw',
                    content: 'tratata'
                }
                
            ]
        },
        {
            block : 'footer',
            content : [
                {
                    block: 'dev',
                    mods: {color: 'green'},
                    js: true,
                    content: 'demo dev'
                },
            ]
        }
    ]
};
