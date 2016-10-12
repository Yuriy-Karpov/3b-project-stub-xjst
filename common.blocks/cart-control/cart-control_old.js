window.medstar = window.medstar || {};
window.medstar.ui = window.medstar.ui || {};
window.medstar.ui.cartControl = window.medstar.ui.cartControl || {};

window.medstar.ui.cartControl = {
    /**
     * data-min минимальное количество (default: 0),  data-max - максимальное (default: false)
     * @param elem
     */
    minus: function (elem) {
        var $input = $(elem).parent().find('input'),
            min = $input.data('min') || 0;
        var count = parseInt($input.val()) - 1;
        count = count < min ? min : count;
        $input.val(count);
        $input.change();
    },
    plus: function (elem) {
        var $input = $(elem).parent().find('input'),
            max = $input.data('max');
        var count = parseInt($input.val()) + 1;
        if (max) {
            count = count > max ? max : count; //если нужно ограничить колличество
        }
        $input.val(count);
        $input.change();
    },
    changeFilter: function (elem) {
        var $this = $(elem);
        var count = parseInt($this.val());
        count = isNaN(count) ? 0 : count;
        //count = count > 1000 ? 1000 : count; //если ограничить колличество
        $this.val(count);
        if (count != 0) {
            $(elem).parents('[data-product]').addClass('selected');
        } else {
            $(elem).parents('[data-product]').removeClass('selected');
        }
    },
    /**
     *
     * @param {jQuery} input
     */
    wait: function (input) {
        input.closest('.cart-control').addClass('cart-control_wait');
    },
    /**
     *
     * @param {jQuery} input
     */
    waitEnd: function (input) {
        input.closest('.cart-control').removeClass('cart-control_wait');
    }
};
/**
 * data-product установить на элемент который нужно выделить при input > 0, класс "selected" сам по себе не имеет стилей, работает в зависимостях с другими классами
 */


$(function () {
    var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
    var myDown = isIOS ? "touchstart" : "click";
    $('.cart-control__minus').on(myDown, function (e) {
        e.preventDefault();
        window.medstar.ui.cartControl.minus(this);
    });

    $('.cart-control__plus').on(myDown, function (e) {
        e.preventDefault();
        window.medstar.ui.cartControl.plus(this);
    });

    $(".cart-control__input").change(function (e) {
        e.preventDefault();
        // window.medstar.ui.cartControl.changeFilter(this); // тут заблокирован инпут
    })

});
