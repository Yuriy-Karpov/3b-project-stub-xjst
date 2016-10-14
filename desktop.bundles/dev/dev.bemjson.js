module.exports = {
    block: 'page',
    title: 'Demo',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: '../_merged/_merged.css'},
    ],
    scripts: [{elem: 'js', url: '../_merged/_merged.min.js'}],
    content: [
        {
            block: 'jquery-window'
        },
        {
            block: 'demo-header',
            content: [
                {
                    block: 'container',
                    content: [
                        {
                            block: 'h1',
                            content: '3b-project-stub-xjst'
                        }
                    ]
                }
            ]
        },
        {
            block: 'container',
           content: [
               {
                   block: 'row',
                   content: [
                       {
                           elem: 'col',
                           mods: {sm: '9'},
                           content: [
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Самогенерируемая рыба'
                                       },
                                       {
                                           block: 'fish',
                                       },
                                       {
                                           block: 'demo-marked',
                                           name: 'fish'
                                       },
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Row'
                                       },
                                       'реализация grid системы',
                                       {
                                           block: 'demo-marked',
                                           name: 'row'
                                       },
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Button'
                                       },
                                       {
                                           block: 'btn',
                                           content: 'кнопка'
                                       },
                                       {
                                           block: 'demo-marked',
                                           name: 'btn'
                                       },
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Input control'
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
                                           block: 'demo-marked',
                                           name: 'checkbox'
                                       },
                                       {
                                           block: 'radio',
                                           content: 'radio'
                                       },
                                       {
                                           block: 'radio',
                                           mods: {custom: true},
                                           content: 'custom checkbox'
                                       },
                                       {
                                           block: 'demo-marked',
                                           name: 'radio'
                                       },
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Image'
                                       },
                                       {
                                           block: 'img',
                                           url: 'https://pbs.twimg.com/profile_images/3563995166/d0ee78b79b5d806a31c757126e7afe65.png'
                                       },
                                       {
                                           block: 'img',
                                           mods: {lazyload: true},
                                           url: 'https://pbs.twimg.com/profile_images/3563995166/d0ee78b79b5d806a31c757126e7afe65.png'
                                       },
                                       {
                                           block: 'demo-marked',
                                           name: 'img'
                                       },
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Alerts'
                                       },
                                       {
                                           block: 'alert',
                                           content: 'alert'
                                       },
                                       {
                                           block: 'demo-marked',
                                           name: 'alert'
                                       },
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Breadcrumb'
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
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Cart-control'
                                       },
                                       {
                                           block: 'cart-control',
                                           buttonMinus: '-',
                                           buttonPlus: '+'
                                       },
                                       {
                                           block: 'cart-control',
                                           min: 1,
                                           max: 100,
                                           value: 1
                                       },
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Списки'
                                       },
                                       {
                                           block: 'h4',
                                           content: 'Нумированный'
                                       },
                                       {
                                           block: 'ol',
                                           content: [
                                               {
                                                   elem: 'li',
                                                   content: 'пункт списка'
                                               },
                                               {
                                                   elem: 'li',
                                                   content: 'пункт списка'
                                               },
                                               {
                                                   elem: 'li',
                                                   content: [
                                                       {
                                                           block: 'ol',
                                                           content: [
                                                               {
                                                                   elem: 'li',
                                                                   content: 'пункт списка'
                                                               },
                                                               {
                                                                   elem: 'li',
                                                                   content: 'пункт списка'
                                                               },

                                                           ]
                                                       }
                                                   ]
                                               },
                                               {
                                                   elem: 'li',
                                                   content: 'пункт списка'
                                               }
                                           ]
                                       },
                                       {
                                           block: 'demo-marked',
                                           name: 'ol'
                                       },
                                       {
                                           block: 'h4',
                                           content: 'Ненумированный'
                                       },
                                       {
                                           block: 'ul',
                                           content: [
                                               {
                                                   elem: 'li',
                                                   content: 'пункт списка'
                                               },
                                               {
                                                   elem: 'li',
                                                   content: 'пункт списка'
                                               },
                                               {
                                                   elem: 'li',
                                                   content: 'пункт списка'
                                               },
                                               {
                                                   elem: 'li',
                                                   content: 'пункт списка'
                                               }
                                           ]
                                       },
                                       {
                                           block: 'demo-marked',
                                           name: 'ul'
                                       },
                                       {
                                           block: 'h4',
                                           content: 'Список не стилизованный'
                                       },
                                       {
                                           block: 'ul',
                                           mods: {unstyled: true},
                                           content: [
                                               'пункт списка',
                                               'пункт списка',
                                               'пункт списка',
                                           ]
                                       }
                                   ]
                               },
                               {
                                   block: 'demo-line',
                                   content: [
                                       {
                                           block: 'h2',
                                           content: 'Form'
                                       },
                                       {
                                           block: 'h4',
                                           content: 'Input'
                                       },
                                       {
                                           block: 'input',
                                           mods: {control: true},
                                           placeholder: 'placeholder input'
                                       },
                                       {
                                           block: 'h5',
                                           content: 'Input size lg'
                                       },
                                       {
                                           block: 'input',
                                           mods: {control: true, size: 'lg'},
                                           placeholder: 'placeholder input'
                                       },
                                       {
                                           block: 'h5',
                                           content: 'Input size sm'
                                       },
                                       {
                                           block: 'input',
                                           mods: {control: true, size: 'sm'},
                                           placeholder: 'placeholder input'
                                       },
                                       {
                                           block: 'h4',
                                           content: 'Textarea'
                                       },
                                       {
                                           block: 'textarea',
                                           rows: 4,
                                           placeholder: 'placeholder textarea'
                                       },
                                       {
                                           block: 'h4',
                                           content: 'Select'
                                       },
                                       {
                                           block: 'select',
                                           mods: {control: true},
                                           content: [
                                               'option 1',
                                               'option 2',
                                               'option 3',
                                               'option 4'
                                           ]
                                       },
                                       {
                                           block: 'h5',
                                           content: 'Select multiple'
                                       },
                                       {
                                           block: 'select',
                                           mods: {control: true, multiple: true},
                                           content: [
                                               'option 1',
                                               'option 2',
                                               'option 3',
                                               'option 4'
                                           ]
                                       },
                                   ]
                               }

                           ]
                       },
                       {
                           elem: 'col',
                           mods: {sm: '3'},
                           content: 'тут меню'
                       }
                   ]
               }
           ]
        },
        {
            block: 'footer',
            content: [

            ]
        }
    ]
};
