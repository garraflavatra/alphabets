---
title: Why would I use this?
---

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

## Why not?

I see very few reasons not to use this package.

### But doesn't it cost me performance?

No. This package is only <800 bytes so it should not cost you any performance.
Neither via [CDN](/usage/installation/#cdn) nor if you use a bundler like
webpack, Parcel or Rollup.

### Why not making an array on my own?

It's a choice. This whole package is **opinionated**. *I* think you should not
do `const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');` in your code. *I*
think you should use a package for that. Do you think it's OK to define your own
alphabet array? Do that!
