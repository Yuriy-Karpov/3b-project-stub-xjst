# input

Блок реализует тег input http://getbootstrap.com/css/#inputs

## Обзор

### Специализированные поля блока

| Поле | Тип | Описание |
| ----------- | ------------------- | -------- |
| placeholder | String | плэйсхолдер |
| id | String | id для input |
| name | String | name для input |
| type | String (default 'text') | type для input  |


### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| disabled | true | JSON | disabled input, блокировка инпута |
| control | true | JSON | добавляет bootstrap класс form-control (!внимание replaceClass)|
| size | lg, sm | JSON | изменяет размер инпута, настройка через переменные bootstrap (!внимание replaceClass)|



### Публичные технологии блока

Блок реализован в технологиях:

* `bemhtml.js`



