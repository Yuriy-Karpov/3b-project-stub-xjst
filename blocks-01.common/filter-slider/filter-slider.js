window.iv = window.iv || {};
window.iv.ui = window.iv.ui || {};

window.iv.ui.filterSlider = {
    init: function () {

        var allFilter = $(".filter-slider");

        allFilter.each(function (i, el) {
            var $el = $(el);
            var filterSlider = $el.find(".filter-slider__slider");
            var inputMin = $el.find('.filter-slider__input-min'),
                inputMax = $el.find('.filter-slider__input-max');

            var valuesMin = inputMin.val(),
                valuesMax = inputMax.val(),
                priceMin = inputMin.data('price-min'),
                priceMax = inputMax.data('price-max');


            var valuesMinTemp = valuesMin ? valuesMin : priceMin;
            var valuesMaxTemp = valuesMax ? valuesMax : priceMax;

            var isFloat = $el.hasClass('filter-slider_float') ? true : false;
            
            var stepSlider = isFloat ? 0.1 : 1;
            
            filterSlider.slider({
                range: true,
                min: priceMin,
                max: priceMax,
                step: stepSlider,
                values: [valuesMinTemp, valuesMaxTemp],
                slide: function (event, ui) {
                    inputMin.val(ui.values[0]);
                    inputMax.val(ui.values[1]);
                }
            });
            if (inputMin.val()) {
                inputMin.val(filterSlider.slider("values", 0));
            }
            if (inputMax.val()) {
                inputMax.val(filterSlider.slider("values", 1));
            }


            inputMin.on('change', function () {
                var count = isFloat ? +($(this).val()) : parseInt($(this).val());
                count = isNaN(count) ? 0 : count;
                $(this).val(count);
                if (count <= filterSlider.slider("values", 1)) {
                    filterSlider.slider("values", 0, $(this).val());

                    if (count < priceMin) {
                        filterSlider.slider("values", 0, priceMin);
                        $(this).val(priceMin)
                    }
                } else {
                    filterSlider.slider("values", 0, inputMax.val());
                    $(this).val(inputMax.val())
                }
            });

            inputMax.on('change', function () {
                // var count = parseInt($(this).val());
                var count = isFloat ? +($(this).val()) : parseInt($(this).val());
                count = isNaN(count) ? priceMax : count;
                $(this).val(count);
                if (count >= filterSlider.slider("values", 0)) {
                    filterSlider.slider("values", 1, $(this).val());

                    if (count > priceMax) {
                        filterSlider.slider("values", 1, priceMax);
                        $(this).val(priceMax)
                    }
                } else {
                    filterSlider.slider("values", 1, inputMin.val());
                    $(this).val(inputMin.val())
                }
            })
        });
    }
};


$(function () {
    window.iv.ui.filterSlider.init();
});