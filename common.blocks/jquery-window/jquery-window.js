modules.define('jquery-window', ['loader_type_js', 'jquery__config'], function(provide, loader, cfg) {

        /* global jQuery */

        function doProvide(preserveGlobal) {
            /**
             * @exports
             * @type Function
             */
            console.log('test');
            provide(preserveGlobal? jQuery : jQuery.noConflict(true));
        }

        typeof jQuery !== 'undefined'?
            doProvide(true) :
            loader(cfg.url, doProvide);
    });