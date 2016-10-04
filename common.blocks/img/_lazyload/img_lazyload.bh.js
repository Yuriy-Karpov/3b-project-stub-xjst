
module.exports = function(bh) {

    bh.match('img_lazyload', function(ctx, json) {
        ctx.mix([{block: 'lazyload'}])
          .attr('data-src', json.src)
          .attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', true);
    });

};
