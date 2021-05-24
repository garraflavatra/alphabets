---
title: Alphabets
---

A tiny JS dependency (<2kb!) which exports many alphabets for many use
cases.

[![CI](https://github.com/garraflavatra/alphabets/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/garraflavatra/alphabets/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/alphabets)](https://www.npmjs.com/package/alphabets)
[![npm bundle size](https://img.shields.io/bundlephobia/min/alphabets)](https://www.npmjs.com/package/alphabets)

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

### Why not?

I see very few reasons not to use this package.

#### But doesn't it cost me performance?

No. This package is only <800 bytes so it should not cost you any performance.
Neither via CDN nor if you use a bundler like webpack, Parcel or Rollup.

#### Why not making an array on my own?

It's a choice. This whole package is **opinionated**. *I* think you should not
do `const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');` in your code. *I*
think you should use a package for that. Do you think it's OK to define your own
alphabet array? Do that!

### Competitors

Know more alternatives? Please open an
[issue](https://github.com/garraflavatra/alphabet.js/issues/new) or 
[pull request](https://github.com/garraflavatra/alphabet.js)!
{: .notice--info}

#### [alphabet](https://www.npmjs.com/package/alphabet)

Seems a good alternative, right? But:

* It only supports the Latin alphabet.
* It is larger. (The size is equal to this package's size, but this package
  includes more.)
* It is only [CommonJS](https://en.wikipedia.org/wiki/CommonJS) and not 
  [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) etc.
* When did the author last update it? Right.
  <figure>
    <img src="/images/competitors/alphabet-last-publish.png" alt="Last updated: 6 years ago">
    <figcaption>Hmmm...</figcaption>
  </figure>

I do not say this package doesn't work. I think it will work perfectly, but it
has less features.
{: .notice--warning}

## Usage

### Installation

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

### Usage

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

## API

### Supported alphabets

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
