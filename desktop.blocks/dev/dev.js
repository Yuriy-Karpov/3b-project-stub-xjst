modules.define('dev', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js' : {
                'inited' : function() {

                    this.bindTo('click', function() {
                        this.toggleMod('color', 'green', 'red');
                    });
                }
            },
            'active' : function() {
                console.log(provide + ' active');
            },
            'color' : {
                'red' : function(modName, modVal, currentModVal) {
                    
                    console.log(' mod color red active');

                    console.log(modName);
                    console.log(modVal);
                    console.log(currentModVal);


                },
                'green' : function() {
                    console.log('mod color green active');
                },
         
                '' : function() {
                    console.log(provide + 'remove color mod');
                }
            },
        }
    }));

});