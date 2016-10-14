window.iv = window.iv || {};
window.iv.ui = window.iv.ui || {};
/**
 * jq Object || string fot select jq
 */
window.iv.ui.selectCustom = function (select) {
    if (typeof(select) !== "object") select = $(select);
    select.each(function () {
        var $this = $(this);
        var overflowText = $this.data('overflow-text') || 'Всего',
            selectWidth = $this.data('select-width') || '100%',
            placeholderText = $this.data('placeholder-text') || 'Ничего не выбрано';

        $this.multiselect({
            nonSelectedText: placeholderText,
            buttonClass: 'btn btn-select',
            buttonWidth: selectWidth,
            allSelectedText: overflowText
        });
    })
}

$(function () {
    window.iv.ui.selectCustom('.select_custom')
})