modules.define('cart-control', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
            onSetMod: {
                'js': {
                    'inited': function () {
                        var _this = this;
                        this.elem('input').change(function () {
                            _this.changeFilter();
                            console.log('change test');
                        })
                        this.on('iv-change', function () {
                            _this.changeFilter();
                        })

                    }

                }
            },
            minus: function () {
                var $input = this.elem('input'),
                    min = $input.data('min') || 0;
                var count = parseInt($input.val()) - 1;
                $input.val(count);
                this.emit('iv-change');
                console.log($input.data('tic') || 0 - 50);
            },
            plus: function () {
                var $input = this.elem('input'),
                    $el = this.elem('button_plus'),
                    max = $input.data('max');
                var count = parseInt($input.val()) + 1;
                $input.val(count);
                this.emit('iv-change');
                var t = +new Date;
                console.log(t - $input.data('tic') || 0);
                    var timerId = setTimeout(function () {
                        $input.change();
                    }, 400)
                // 1000 так как инвформация о последнем клике ещё не установленна в data-tic
                if ((t - $input.data('tic') || 1000) < 350) {
                    clearTimeout(timerId);
                }
                $input.data('tic', t)
            },
            changeFilter: function () {
                var $input = this.elem('input'),
                    max = $input.data('max'),
                    min = $input.data('min') || 0;
                var count = parseInt($input.val());
                count = isNaN(count) ? min : count;
                count = count < min ? min : count;
                if (max) {
                    count = count > max ? max : count;
                }
                $input.val(count);
            },
            wait: function (input) {
                input.closest('.cart-control').addClass('cart-control_wait');
            },
            waitEnd: function (input) {
                input.closest('.cart-control').removeClass('cart-control_wait');
            }
        },
        {
            live: function () {
                var _this = this.prototype;
                this
                    .liveBindTo('input', 'click')
                    .liveBindTo('button_minus', 'click', this.prototype.minus)
                    .liveBindTo('button_plus', 'click', this.prototype.plus);
            }
        }
    ));
});