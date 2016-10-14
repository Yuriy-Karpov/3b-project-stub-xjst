module.exports = function (bh) {

    bh.match('background', function (ctx, json) {
        if (json.src) {
            ctx.attr('style', 'background-image: url(\'' + json.src + '\')');
        }
    });

};
