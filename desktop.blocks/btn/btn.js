modules.define('btn', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js' : {
                'inited' : function() {
               
                    var $itemBtn = $(this.domElem[0]);
                    this.bindTo('click', function() {
                        
                        if($itemBtn.hasClass('btn-default')) {
                            $itemBtn.removeClass('btn-default')
                            $itemBtn.addClass('btn-success')
                        } else if ($itemBtn.hasClass('btn-success')) {
                            $itemBtn.removeClass('btn-success')
                            $itemBtn.addClass('btn-default')
                        }
                    });
                }
            },
        },

    }));

});