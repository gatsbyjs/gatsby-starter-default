---
title: I'm a markdown file!
---

Markdown is pretty cool if you ask me.

## You can have lists

### Numbered
1. me first!
2. I'm second!
3. third :(

### Unordered
* Cheese
* is actually
* really good

And **lots** of other *fun* stuff.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

## Some code

Javascript
```javascript
function $initHighlight(block, flags) {
  try {
    if (block.className.search(/\bno\-highlight\b/) != -1)
      return processBlock(block, true, 0x0F) + ' class=""';
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
    if (checkCondition(classes[i]) === undefined)
      return /\d+/g;
  }
}
```

Python
```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```
