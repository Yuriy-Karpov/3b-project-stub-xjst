module.exports = function(bh) {

    bh.match('btn_state_active', function(ctx, json) {
      var cls = ctx.cls() || '';
      cls += ' active';
      ctx.cls(cls, true);
    });

    bh.match('btn_state_disabled', function(ctx, json) {
      switch (ctx.tag()) {
        case 'a':
          var cls = ctx.cls() || '';
          cls += ' disabled';
          ctx.cls(cls, true);
          break;

        default: // buttons, inputs
          ctx
            .attr('disabled', 'disabled');
      }
    });
};
