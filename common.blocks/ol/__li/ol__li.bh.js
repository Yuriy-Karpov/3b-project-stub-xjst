module.exports = function(bh) {
    bh.match('ol__li', function(ctx) {
        ctx
            .tag('li');
    });
};
