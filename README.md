# Alphabets

[![CI](https://github.com/garraflavatra/alphabets/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/garraflavatra/alphabets/actions/workflows/test.yml)

A tiny JS dependency (<2kb!) which exports many alphabets for many use
cases.

More information is available in the
[documentation](https://alphabets.romeinvanburen.nl).

## Why would I use this?

### Why?

I have seen developers doing this:

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
```

Or worse:

```js
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
```

My opinion about this? 🙄. It's ugly, it makes your code less readable
(read: ugly) and it's simply not something you should want to have in your 
code! Instead, you should do it like so:

```js
import { latin } from 'alphabets';
// or
const alphabets = require('alphabets');
```

Much cleaner, right? That's why I made this package.

## Installation

Use npm:

```bash
npm install alphabets --save
```

Or if you prefer Yarn:

```bash
yarn add alphabets
```

CDN, if that's more your style:

```html
<script src="https://unpkg.com/alphabet@1/dist/bundle.js"></script>
```

## Usage

```js
import { <alphabetYouWantToUse> } from 'alphabets';
```

or:

```js
const alphabets = require('alphabets');
console.log(alphabets.<alphabetYouWantToUse>);
```

where `<alphabetYouWantToUse>` is an alphabet this package supports.
[Here](#supported-alphabets) is a list from which you can choose.

## Supported alphabets

Usage: see [Usage](#usage).

| Name | Export name |
|------|-------------|
| Danish | `danish` |
| Faroese | `faroese` |
| Greek (modern) | `greek` |
| Greek (ancient/polytonic) | `greekPolytonic` |
| Icelandic | `icelandic` |
| Latin | `latin` |
| Norwegian | `norwegian` |
| Swedish | `swedish` |
