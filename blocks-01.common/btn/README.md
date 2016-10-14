## Блок btn 

`{`
    `block: 'btn',`
    `type: 'link',` // _link или button (по умолчанию button, если ничего не передать)_
    `url: 'https://ru.bem.info'` // _(по умолчанию '#', если ничего не передать)/
    `content: 'Подписаться' `
`}`
### результат 
`<a class="btn btn-default" href="#">Подписаться</a>`

## Модификаторы

##### блок btn подчиняется правилам bem пока нет модификатора size, который отменяет правила bem, что бы не было мусорных класов
`{`
    `block: 'btn',`
    `type: 'link',` // link или button (по умолчанию link)
    `mods: {size: 'xs'},`
    `content: 'Подписаться'` // текст кнопки
`}`
### результат 
`<a class="btn btn-default btn-xs" href="#">Подписаться</a>`
