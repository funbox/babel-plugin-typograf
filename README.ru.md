# @funboxteam/babel-plugin-typograf

Babel-плагин для автоматического типографирования текста.

Для обработки текста, плагин использует библиотеку [Typograf](https://github.com/typograf/typograf).

Основные возможности Typograf:

* удаление лишних пробелов;
* автоматическая расстановка неразрывных пробелов;
* конвертация двойных кавычек в «елочки»;
* конвертация HTML-сущностей (`&nbsp;`, `&laquo;`, `&raquo;` и т.д.) в Unicode-символы.

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
     
     // Конвертация символов в HTML-сущности (по умолчанию отключена)
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
       ['common/nbsp/beforeShortLastWord', 'lengthLastWord', 8],
     ],
  }],
]
```

**Важно:**
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

## Правила Typograf

В typograf есть список правил, которые включены по умолчанию.  
[Список всех правил](https://github.com/typograf/typograf/blob/dev/docs/RULES.ru.md) можно посмотреть в GitHub-репозитории библиотеки.     

Не рекомендуется включать правила:

* `ru/money/ruble`.
