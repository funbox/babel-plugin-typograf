# @funboxteam/babel-plugin-typograf

Babel-plugin for auto typografing text.

[По-русски](./README.ru.md)

## Installation

`npm i -D @funboxteam/babel-plugin-typograf`

## Configuration 

Add plugin settings into your babel config:

```js
plugins: [
  // ...
  ['@funboxteam/babel-plugin-typograf', {
     // Set locales to get correct symbol replacements (such as quotes, dashes, etc.)
     locale: ['ru', 'en-US'],
     
     // Symbols to HTML entities convertaion (disabled by default)
     htmlEntity: {
       type: 'name',        // 'name' or 'digit'
       onlyInvisible: true, // Set `true` to convert invisible symbols only
     },
     
     // Here you can enable additional typograf rules
     enableRules: [
       'common/nbsp/afterNumber',
     ],
     
     // Here you can disabled typograf rules that are enabled by default
     disableRules: [
       'common/punctuation/quote',
     ],
     
     // Rules settings
     ruleSettings: [
       ["common/nbsp/beforeShortLastWord", "lengthLastWord", 8],
     ],
  }],
]
```

## Usage

Use this special template literal to typograf strings:

```js
// Source string
T`Formatted "string".  `;

// Typografed string
// Tagged template with tag `T` is converted to a simple template literal
`Formatted “string”.`;
```
