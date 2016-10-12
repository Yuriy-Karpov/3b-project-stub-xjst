# select

Блок реализует тег select http://getbootstrap.com/css/#selects

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
| multiple | true | JSON | добавляет атрибут multiple к input |
| control | true | JSON | добавляет bootstrap класс form-control (!внимание replaceClass)|


### Пример:
Можно использовать компактный режим, передать массив, где каждый элемент массива будет преобразован в option
```
{
   block: 'select',
   content: [
       'string',
       'string',
       'string',
       'string'
   ]
}
```
а можно и как обычно передав элементы в content
```
{
   block: 'select',
   content: [
        {
            elem: 'option',
            content: 'string'
        },
        {
            elem: 'option',
            content: 'string'
        }
   ]
}
```

### Публичные технологии блока

Блок реализован в технологиях:

* `bemhtml.js`



