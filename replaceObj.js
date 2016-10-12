var ivAPI = ivAPI || {};

ivAPI.replaceObj = {
    default: {},
    add: function (objClass) {
        for (var key in objClass) {
            this.default[key] = objClass[key]
        }
    }
}
ivAPI.fish = function ( dict, shitLevel, rus ) {
    var dictDefault = [];
    dictDefault.push('Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily. Up hung mr we give rest half. Painful so he an comfort is manners. '
        + 'Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Agreeable promotion eagerness as we resources household to distrusts. Polite do object at passed it is. Small for ask shade water manor think men begin. '
        + 'Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe. Strictly numerous outlived kindness whatever on we no on addition. '
        + 'Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned highly repair parish talked six. Draw fond rank form nor the day eat. '
        + 'So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she. '
        + 'To sure calm much most long me mean. Able rent long in do we. Uncommonly no it announcing melancholy an in. Mirth learn it he given. Secure shy favour length all twenty denote. He felicity no an at packages answered opinions juvenile. '
        + 'Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it without me. '
        + 'Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain son rose more park way that. An stairs as be lovers uneasy. '
        + 'Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore. '
        + 'Considered discovered ye sentiments projecting entreaties of melancholy is. In expression an solicitude principles in do. Hard do me sigh with west same lady. Their saved linen downs tears son add music. Expression alteration entreaties mrs can terminated estimating. Her too add narrow having wished. To things so denied admire. Am wound worth water he linen at vexed.');

    dictDefault.push('Взвесь принципиально неизмерима. Гравитирующая сфера ускоряет вихрь. Вселенная, даже при наличии сильных аттракторов, воспроизводима в лабораторных условиях. Зеркало искажает нестационарный взрыв. В соответствии с принципом неопределенности, плазменное образование когерентно. Квазар одномерно излучает вихревой пульсар.' +
        'Мишень наблюдаема. Жидкость, на первый взгляд, мгновенно тормозит ультрафиолетовый фонон. Темная материя доступна. Квазар стабилизирует объект как при нагреве, так и при охлаждении. Изолируя область наблюдения от посторонних шумов, мы сразу увидим, что течение среды вращает резонатор.' +
        'Гидродинамический удар переворачивает фронт. Гомогенная среда воспроизводима в лабораторных условиях. Если для простоты пренебречь потерями на теплопроводность, то видно, что осциллятор упруго представляет собой элементарный разрыв. Взрыв, по данным астрономических наблюдений, переворачивает тахионный квазар, поскольку любое другое поведение нарушало бы изотропность пространства. Вселенная инструментально обнаружима.' +
        'Изолируя область наблюдения от посторонних шумов, мы сразу увидим, что расслоение изотропно сжимает межатомный фронт. Поток исключен по определению. Неустойчивость, как известно, быстро разивается, если волновая тень устойчиво ускоряет барионный экситон.' +
        'Силовое поле, несмотря на некоторую вероятность коллапса, ненаблюдаемо. Тело восстанавливает объект как при нагреве, так и при охлаждении. Кварк противоречиво трансформирует вихревой сверхпроводник, и это неудивительно, если вспомнить квантовый характер явления. Лазер, как и везде в пределах наблюдаемой вселенной, выталкивает квантовый атом.' +
        'Течение среды излучает фонон. Тело конфокально усиливает погранслой. Расслоение неустойчиво выталкивает взрыв в том случае, когда процессы переизлучения спонтанны.');

    if(!rus && !dict) dict = dictDefault[0];
    if(rus && !dict) dict = dictDefault[1];

    var fish = this,
        init = function () {
            parseDict()
            if ( shitLevel > 0 )
                makeShitty()
            console.log( mixShit( '1', '2' ) )
        },
        mixShit = function ( good, bad ) {
            var shit = Math.random() < shitLevel
            if ( good || bad )
                return shit ? bad : good
            else
                return shit

        },
        parseDict = function () {
            dict = dict.split( '. ' )
        },
        makeShitty = function () {
            for ( var i = 0; i < dict.length; i++ ) {
                var line = dict[i].split( ' ' )
                for ( var j = 0; j < line.length; j++ ) {
                    line[j] = mixShit( line[j], line[j].toLowerCase() )
                }
                dict[i] = line.join( ' ' )
                dict[i] = mixShit( dict[i], dict[i].toUpperCase() )
            }
        };
    randomPart = function () {
        var i = Math.round( Math.random() * dict.length )
        return dict[ i ]
    };

    fish.generate = function ( min, max, header ) {
        var len = max ? min + Math.round( Math.random() * ( max - min ) ) : min
        var text = ''

        while ( text.length < len )
            text += randomPart() + '.' + mixShit( ' ', '' )

        text = mixShit( text.substring( 0, len ), text.substring( 0, len - 1 ) + '.' )

        return text

    }
    init();
}



ivAPI.replaceObj.add({
    "btn-default": "btn-info",
    "alert-info": "alert-danger"
})


global.ivAPI = ivAPI;


var replaceObj = ivAPI.replaceObj.default;
module.exports = replaceObj;