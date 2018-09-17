# @funboxteam/babel-plugin-typograf

Babel-плагин для автоматической типографики текста.

Для обработки текста, плагин использует библиотеку [Typograf](https://github.com/typograf/typograf).<br>
Основные возможности Typograf:

* Удаление лишних пробелов.
* Автоматическая расстановка неразрывных пробелов.
* Конвертация двойных кавычек в «елочки».
* Конвертация html-сущностей (`&nbsp;`, `&laquo;`, `&raquo;` и т.д.) в Unicode-символы.

[Список всех правил](https://github.com/typograf/typograf/blob/dev/docs/RULES.ru.md) можно посмотреть в github-репозитории библиотеки.

## Установка

`npm i -D @funboxteam/babel-plugin-typograf`

## Настройка

После установки, необходимо добавить плагин в конфигурацию babel:

```js
plugins: [
  // ...
  ['@funboxteam/babel-plugin-typograf', {
     // Замена символов происходит с учётом локали
     locale: ['ru', 'en-US'],
     
     // Конвертация символов в html-сущности (по умолчанию отключена)
     htmlEntity: {
       type: 'name',        // Может быть name или digit
       onlyInvisible: true, // Конвертировать только невидимые символы
     },
     
     // Здесь можно включить дополнительные правила
     enableRules: [
       'common/nbsp/afterNumber',
     ],
     
     // Правила, которые включены по умолчанию в typograf, можно отключить
     disableRules: [
       'common/punctuation/quote',
     ],
     
     // Настройки правил
     ruleSettings: [
       ["common/nbsp/beforeShortLastWord", "lengthLastWord", 8],
     ],
  }],
]
```

В секции `plugins`, `babel-plugin-typograf` должен быть выше других плагинов которые работают с `template literals` (например `plugin-transform-template-literals`), чтобы конвертирование tagged templates в обычные template literals, было выполнено раньше.

## Использование

Для обозначения строк, в которые нужно добавить типографику, используется специальный tagged template:

```js
// Исходная строка
T`Отформатированная "строка".  `;

// Строка после обработки плагином
// Tagged Template с тегом T конвертируется в простой Template Literal
`Отформатированная «строка».`;
```
