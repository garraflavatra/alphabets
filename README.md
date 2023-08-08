# Alphabets

A tiny JS package that exports many different alphabets for many different use cases.

[![npm](https://img.shields.io/npm/v/alphabets)](https://www.npmjs.com/package/alphabets)
[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)

## Included alphabets

See below for [usage instructions](#how-to-use).

| Export name      | Alphabet         |
|------------------|------------------|
| `danish`         | [Danish](https://en.wikipedia.org/wiki/Danish_orthography), same as Norwegian |
| `faroese`        | [Faroese](https://en.wikipedia.org/wiki/Faroese_orthography) |
| `greek`          | [Greek](https://en.wikipedia.org/wiki/Greek_alphabet) |
| `icelandic`      | [Icelandic](https://en.wikipedia.org/wiki/Icelandic_orthography) |
| `latin`          | [Latin](https://en.wikipedia.org/wiki/Latin_alphabet) (abcdefg etc.) |
| `nato`           | [NATO phonetic alphabet](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet) |
| `norwegian`      | [Norwegian](https://en.wikipedia.org/wiki/Danish_and_Norwegian_alphabet), same as Danish |
| `polish`         | [Polish](https://en.wikipedia.org/wiki/Polish_alphabet) |
| `russian`        | [Russian](https://en.wikipedia.org/wiki/Russian_alphabet) |
| `swedish`        | [Swedish](https://en.wikipedia.org/wiki/Swedish_alphabet) |
| `ukrainian`      | [Ukrainian](https://en.wikipedia.org/wiki/Ukrainian_alphabet) |

## Installation

Install the [alphabets npm module](https://www.npmjs.com/package/alphabets) using your preferred package manager:

* npm: `npm install alphabets`
* Yarn: `yarn add alphabets`
* pnpm: `pnpm add alphabets`

You can also use it with [Deno](https://deno.land/) by importing `https://deno.land/x/alphabets/alphabets.mjs`.

## How to use

Replace `<alphabetYouWantToUse>` with an [alphabet identifier](#included-alphabets) this package exports:

```js
import { <alphabetYouWantToUse> } from 'alphabets';
```

Deno:

```js
import { <alphabetYouWantToUse> } from 'https://deno.land/x/alphabets/alphabets.mjs';
```

or:

```js
const alphabets = require('alphabets');
console.log(alphabets.<alphabetYouWantToUse>);
```

## Why

I have seen [code like this](https://github.com/search?q=%27abcdefghijklmnopqrstuvwxyz%27.split%28%27%27%29+language%3AJavaScript&type=code&l=JavaScript):

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
```

Or [even worse](https://github.com/search?q=%5B%22a%22%2C+%22b%22%2C+%22c%22%2C+%22d%22%2C+%22e%22%2C+%22f%22%2C+%22g%22%2C+%22h%22%2C+%22i%22%2C+%22j%22%2C+%22k%22%2C+%22l%22%2C+%22m%22%2C+%22n%22%2C+%22o%22%2C+%22p%22%2C+%22q%22%2C+%22r%22%2C+%22s%22%2C+%22t%22%2C+%22u%22%2C+%22v%22%2C+%22w%22%2C+%22x%22%2C+%22y%22%2C+%22z%22%5D+language%3AJavaScript&type=code&l=JavaScript):

```js
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```

My opinion about this: it's ugly, and it pollutes your code. Instead, why not [do it like this](#how-to-use):

```js
import { latin } from 'alphabets';

for (const glyph of latin) {/* ... */}
```

This is much cleaner and more idiomatic.

## Copyright

(c) 2021-2023 Romein van Buren. Licensed under the MIT license.

For the full copyright and license information, please see the [`LICENSE.md`](./LICENSE.md) file that was distributed with this source code.
