module.exports = function(bh) {

    bh.match('alert', function(ctx, json) {
        ctx
            .attr('role', 'alert')
            .mod('color', 'info');
    });

};
