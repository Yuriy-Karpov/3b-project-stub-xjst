module.exports = function (bh) {

    bh.match('background_lazyload', function (ctx, json) {
        ctx.mix([{block: 'lazyload'}]);

        if (typeof json.src === 'object') {
            var bgset = [];
            Object.keys(json.src).forEach(function (key) {
                bgset.push(json.src[key] + ' [' + key + ']');
            });
            ctx.attr('data-bgset', bgset.join(' | '))
                .attr('style', false, true);
        } else {
            ctx.attr('data-bg', json.src)
                .attr('style', false, true);
        }

    });

};
