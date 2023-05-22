# Changelog

## 3.0.0 (22.05.2023)

Dropped Node.js 12 support.

Added Node.js 16 & 18 support.

Read more in the [migration guide](./MIGRATION.md).


## 2.1.1 (10.06.2021)

Fixed several security vulnerabilities:

- [Use of a Broken or Risky Cryptographic Algorithm](https://github.com/advisories/GHSA-r9p9-mrjm-926w) in [elliptic](https://github.com/indutny/elliptic). Updated from 6.5.3 to 6.5.4.

- [Prototype Pollution](https://github.com/advisories/GHSA-c4w7-xm78-47vh) in [y18n](https://github.com/yargs/y18n). Updated from 3.2.1 to 3.2.2.

- [Remote Code Execution](https://github.com/advisories/GHSA-f2jv-r9rf-7988) in [handlebars](https://github.com/handlebars-lang/handlebars.js). Updated from 4.7.6 to 4.7.7.

- [Regular Expression Denial of Service](https://github.com/advisories/GHSA-43f8-2h32-f4cj) in [hosted-git-info](https://github.com/npm/hosted-git-info). Updated from 2.8.8 to 2.8.9.

- [Command Injection](https://github.com/advisories/GHSA-35jh-r3h4-6jhm) in [lodash](https://github.com/lodash/lodash). Updated from 4.17.20 to 4.17.21.

- [Regular Expression Denial of Service](https://github.com/advisories/GHSA-w8qv-6jwh-64r5) in [browserslist](https://github.com/browserslist/browserslist). Updated from 4.13.0 to 4.16.6.

- [Regular Expression Denial of Service](https://www.npmjs.com/advisories/1748) in [ws](https://www.npmjs.com/package/ws). Updated from 7.4.5 to 7.4.6.

- [Regular Expression Denial of Service](https://www.npmjs.com/advisories/1751) in [glob-parent](https://www.npmjs.com/package/glob-parent). Updated from 3.1.0 to 5.1.2. Also led to @babel/cli update from 7.0.0 to 7.14.5.

- and others.


## 2.1.0 (23.10.2020)

* Add type declarations.

## 2.0.0 (07.07.2020)

* Add LICENSE file.
* Improve package description in README and package.json.
* Prepare package to publish on GitHub.

## 1.5.0 (06.05.2019)

* Update typograf to 6.8.2.

## 1.4.0 (20.02.2019)

* Disable rule `common/space/delBeforePunctuation`.

## 1.3.0 (31.01.2018)

* Disable not recommended rules.
* Add rule `common/space/afterPunctuation` into the “Do not turn on” section.

## 1.2.0 (31.01.2018)

* Add rule `common/space/delBeforePunctuation` into the “Do not turn on” section.

## 1.1.0 (12.10.2018)

* Improve `ru/money/ruble` description in README.

## 1.0.0 (04.10.2018)

* Initial version.
