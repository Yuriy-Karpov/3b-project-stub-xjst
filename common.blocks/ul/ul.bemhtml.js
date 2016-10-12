block('ul')(
    tag()('ul'),
    match(function() {
        console.log('++++++++++++++++++++');
        console.log(typeof this.ctx.content[0] === 'string');
        return typeof this.ctx.content[0] === 'string' })(
        content()(function () {
            var content = this.ctx.content.map(function (item) {
                return [
                    {
                        elem: 'li',
                        tag: 'li',
                        content: item
                    }
                ]
            })
            return content;

        })
    )

)
// var c = [{e: 'ew', s: 'sfg', a: 'fs'}]
// Object.prototype.toString.call(c) === '[object Array]'