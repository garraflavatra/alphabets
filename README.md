# Alphabets

A tiny JS dependency which exports many alphabets for many use cases.

[![npm](https://img.shields.io/npm/v/alphabets)](https://www.npmjs.com/package/alphabets)
[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)

## Why

I have seen [code like this]:

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
```

Or [worse]:

```js
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```

My opinion about this: it's ugly, and it pollutes your code. Instead, why not [do it like this](#how-to-use):

```js
import { latin } from 'alphabets';

doSomethingWithTheAlphabet(latin);
```

Much cleaner, right?

## Installation

Install the [alphabets npm module](https://www.npmjs.com/package/alphabets) using your preferred package manager:

* npm: `npm install alphabets`
* Yarn: `yarn add alphabets`
* pnpm: `pnpm add alphabets`

## Supported alphabets

See below for [usage instructions](#how-to-use).

| Alphabet                  | Export name      |
|---------------------------|------------------|
| Danish                    | `danish`         |
| Faroese                   | `faroese`        |
| Greek (modern)            | `greek`          |
| Greek (ancient/polytonic) | `greekPolytonic` |
| Icelandic                 | `icelandic`      |
| Latin (abcdefg etc.)      | `latin`          |
| [NATO phonetic alphabet]  | `nato`           |
| Norwegian                 | `norwegian`      |
| Russian                   | `russian`        |
| Swedish                   | `swedish`        |
| Ukrainian                 | `ukrainian`      |

## How to use

Replace `<alphabetYouWantToUse>` with an alphabet identifier this package supports:

```js
import { <alphabetYouWantToUse> } from 'alphabets';
```

or:

```js
const alphabets = require('alphabets');
console.log(alphabets.<alphabetYouWantToUse>);
```

## Copyright

(c) 2021-2023 Romein van Buren. Licensed under the MIT license.

For the full copyright and license information, please view the [`LICENSE.md`](./LICENSE.md) file that was distributed with this source code.


[code like this]: https://github.com/search?q=%27abcdefghijklmnopqrstuvwxyz%27.split%28%27%27%29+language%3AJavaScript&type=code&l=JavaScript
[worse]: https://github.com/search?q=%5B%22a%22%2C+%22b%22%2C+%22c%22%2C+%22d%22%2C+%22e%22%2C+%22f%22%2C+%22g%22%2C+%22h%22%2C+%22i%22%2C+%22j%22%2C+%22k%22%2C+%22l%22%2C+%22m%22%2C+%22n%22%2C+%22o%22%2C+%22p%22%2C+%22q%22%2C+%22r%22%2C+%22s%22%2C+%22t%22%2C+%22u%22%2C+%22v%22%2C+%22w%22%2C+%22x%22%2C+%22y%22%2C+%22z%22%5D+language%3AJavaScript&type=code&l=JavaScript
[NATO phonetic alphabet]: https://en.wikipedia.org/wiki/NATO_phonetic_alphabet
