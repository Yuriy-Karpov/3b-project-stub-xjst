block('ul__link')(
   tag()('li'),
    content()([
        {
            block: 'link',
            content: ctx.content()
        }
    ])
)