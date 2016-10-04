module.exports = function (bh) {
    bh.match('img', function (ctx, json) {
        var $alt = json.alt || '';
        var $url = json.url || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        ctx.tag('img')
            .attrs({
                src: '../../../images/' + $url,
                alt: $alt
            })
    })
}
