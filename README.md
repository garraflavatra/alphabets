# Alphabets

A tiny JS dependency which exports many alphabets for many use cases.

[![npm](https://img.shields.io/npm/v/alphabets)](https://www.npmjs.com/package/alphabets)
[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)

## Why

I have seen code like this:

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
```

Or worse:

```js
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```

My opinion about this: it's ugly, and it pollutes your code. Instead, you should do it like so:

```js
import { latin } from 'alphabets';
// or
const alphabets = require('alphabets');

doSomethingWithTheAlphabet(latin);
```

Much cleaner, right?

## Installation

Use npm: [`npm i alphabets`](https://www.npmjs.com/package/alphabets). Or if you prefer Yarn: `yarn add alphabets`.

## Supported alphabets

See below for usage instructions.

| Alphabet | Export name |
|------|-------------|
| Danish | `danish` |
| Faroese | `faroese` |
| Greek (modern) | `greek` |
| Greek (ancient/polytonic) | `greekPolytonic` |
| Icelandic | `icelandic` |
| Latin (abcdefg etc.) | `latin` |
| [NATO phonetic alphabet](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet) | `nato` |
| Norwegian | `norwegian` |
| Russian | `russian` |
| Swedish | `swedish` |
| Ukrainian | `ukrainian` |

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
