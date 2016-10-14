modules.define('dev-btn', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    console.log('$: ' + $);
                    this.bindTo('click', function() {
                        this.setMod('active');
                        $('.dev').addClass('dev_color_red');
                    });
                }
            },
            'active' : function() {
                this.domElem.text('нажал');
            }
        }
    }));

});