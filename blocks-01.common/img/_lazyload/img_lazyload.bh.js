module.exports = function (bh) {

    bh.match('img_lazyload', function (ctx, json) {
        var $alt = json.alt || '';

        ctx.mix([{block: 'lazyload'}])
            .attrs({
                'data-src': '../../../images/' + json.url,
                alt: $alt
            })
            .attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', true);
    });

};
