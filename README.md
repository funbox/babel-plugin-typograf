# @funboxteam/babel-plugin-typograf

[![npm](https://img.shields.io/npm/v/@funboxteam/babel-plugin-typograf.svg)](https://www.npmjs.com/package/@funboxteam/babel-plugin-typograf)

Babel plugin for enhancing text punctuation and readability.

[По-русски](./README.ru.md)

## Rationale

Text is the main tool to describe an action in UI. Also there're texts on landing pages,
“FAQs”, “About” sections and other common places on modern websites. Frontend developers should remember
to always write those texts properly using correct quotes, dashes, spaces, symbols, etc.

This plugin makes it possible to automate enhancing text readability but replacing entities in string 
during the build stage. 

## Installation

```bash
npm install --save-dev @funboxteam/babel-plugin-typograf
```

## Configuration 

**Note**:
The plugin should be placed “above” other plugins that work with template literals (such as `plugin-transform-template-literals`) in `plugins` array, to make it possible to convert tagged templates earlier than process template literals overall.

Add plugin settings into your Babel config:

```js
{
  plugins: [
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

      // Here you can disable Typograf rules that are enabled by default
      disableRules: [
        'common/punctuation/quote',
      ],

      // Rules settings
      ruleSettings: [
        ['common/nbsp/beforeShortLastWord', 'lengthLastWord', 8],
      ],
    }],
  ]
}
```

## Usage

Use this template literal tag to transform strings:

```js
// Source string
T`Formatted "string".  `;

// Typografed string
// Tagged template with tag `T` is converted to a regular template literal
`Formatted “string”.`;
```

## Typograf

To process text the plugin uses [Typograf](https://github.com/typograf/typograf). 
It looks for the templates tagged with `T`:

```
T`"string"`
```

Then transforms the text inside and converts the expressions into the regular template literals without the tag:

```
`“string”`
``` 

### Main features of Typograf

* Trailing and double spaces removing.
* Inserting non-breaking spaces.
* Quotes conversion.
* HTML-entities (`&nbsp;`, `&laquo;`, `&raquo;`, etc.) to Unicode-symbols conversion.

### Typograf rules

[Some rules](https://github.com/typograf/typograf/blob/dev/docs/RULES.ru.md) are enabled by default in Typograf's config. 

#### Not recommended to turn on

* `ru/money/ruble`  
  Transforms `руб.` to `₽`. 
  It's better to use `₽` when necessary to avoid transformation in the places where it isn't expected. 
  E.g. in the texts where it's important to use `руб.`. 
  Or in the markup where `₽` isn't displayed correctly due to fonts incompatibility.

* `common/space/delBeforePunctuation`  
  Removes spaces before the punctuation signs. 
  But there's a bug. 
  E.g. the phrase “We need a .Net developer” will be transformed into “We need a.Net developer”. 
  Right now there's no fix for this issue, 
  but [maybe](https://github.com/typograf/typograf/issues/312) later it will be possible to create a list of exceptions.

* `common/space/afterPunctuation`  
  Adds space after the punctuation signs. 
  But sometimes they are added when you don't expect them to see. 
  E.g. `comma sign “,”` will be transformed into `comma sign “, ”`, 
  which will break `common/punctuation/quote` and the result will be `comma sign “, “`.

[![Sponsored by FunBox](https://funbox.ru/badges/sponsored_by_funbox_centered.svg)](https://funbox.ru)
