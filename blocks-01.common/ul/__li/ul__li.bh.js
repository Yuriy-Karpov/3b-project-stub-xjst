module.exports = function(bh) {
    bh.match('ul__li', function(ctx) {
        ctx
            .tag('li');
    });
};
