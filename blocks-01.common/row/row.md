# row

## Обзор
Реализация сетки bootstrap.
Комплексный блок, т.к. col-*-* используется вместе с row, col является элеменом 
__!Внимание, используется btReplace

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| отсутствует | отсутствует| отсутствует |


### Модификаторы блока

##### columns-sm устранение бага (ступеньки) построение колонок с разной высотой, реализованно на css

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| columns-xs | number | BEMJSON | xs - разрешение на котором работает, number - число колонок |
| columns-sm | number | BEMJSON | sm - разрешение на котором работает, number - число колонок |
| columns-md | number | BEMJSON | md - разрешение на котором работает, number - число колонок |
| columns-lg | number | BEMJSON | lg - разрешение на котором работает, number - число колонок |

### Модификаторы элемента `col`
__!Внимание в элементе col должен быть по крайней мере один модификатор ширины__

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| xs, sm, md, lg | number* (1-12) | BEMJSON | ширина колонки где xs\sm\md\lg - разрешение на котором работает, number - ширина колоноки http://getbootstrap.com/css/#grid-example-mixed|
| xs-offset, sm-offset, md-offset, lg-offset | number* (1-12) | BEMJSON | отступ для колонки, xs\sm\md\lg  - разрешение на котором работает, http://getbootstrap.com/css/#grid-offsetting |
| xs-push, sm-push, md-push, lg-push | number* (1-12) | BEMJSON | реализует изменение порядка колонок, xs\sm\md\lg  - разрешение на котором работает, http://getbootstrap.com/css/#grid-column-ordering |
| xs-pull, sm-pull, md-pull, lg-pull | number* (1-12) | BEMJSON | реализует изменение порядка колонок, xs\sm\md\lg  - разрешение на котором работает, http://getbootstrap.com/css/#grid-column-ordering |

__number* по умолчанию 12 колонок (default 1-12) меняется в сетке бутстрапа__

### Пример
```
{
    block: 'row',
    mods: {'columns-sm': '3'}, // 3 колонки 
    content: [
        {
            elem: 'col',
            mods: {sm: 4},
            content: 'контент первой колонки'
        },
        {
            elem: 'col',
            mods: {sm: 4},
            content: 'контент второй колонки'
        },
        {
            elem: 'col',
            mods: {sm: 4},
            content: 'контент третий колонки'
        }
    ]
}
```

Блок реализован в технологиях:
* `btReplace`
* `bemhtml.js`
* `bh.js`
* `css`
* `js`
