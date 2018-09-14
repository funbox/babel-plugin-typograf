# @funboxteam/babel-plugin-typograf

Babel-плагин для автоматической типографики текста.

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

## Использование

Для типографики строк используется специальный tagged template:

```js
// Исходная строка
T`Отформатированная "строка".  `;

// Строка после обработки плагином
// Tagged Template с тегом T конвертируется в простой Template Literal
`Отформатированная «строка».`;
```
