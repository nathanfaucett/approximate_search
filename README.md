approximate_search
=======

fuzzy match on strings


```javascript
var approximateSearch = require("@nathanfaucett/approximateSearch");


approximateSearch("twl", "cartwheel") === true;
approximateSearch("cart", "cartwheel") === true;
approximateSearch("cw", "cartwheel") === true;
approximateSearch("ee", "cartwheel") === true;
approximateSearch("art", "cartwheel") === true;
approximateSearch("eeel", "cartwheel") === false;
approximateSearch("dog", "cartwheel") === false;
```
