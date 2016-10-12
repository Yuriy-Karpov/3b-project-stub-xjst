module.exports = function(bh) {
    bh.match('ol', function(ctx) {
        ctx
            .tag('ol');
    });
};
