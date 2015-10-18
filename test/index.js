var tape = require("tape"),
    approximateSearch = require("..");


tape("approximateSearch(query, text[, caseSensitive = true])", function(assert) {
    assert.equal(approximateSearch("twl", "cartwheel"), true);
    assert.equal(approximateSearch("cart", "cartwheel"), true);
    assert.equal(approximateSearch("cw", "cartwheel"), true);
    assert.equal(approximateSearch("ee", "cartwheel"), true);
    assert.equal(approximateSearch("art", "cartwheel"), true);
    assert.equal(approximateSearch("eeel", "cartwheel"), false);
    assert.equal(approximateSearch("dog", "cartwheel"), false);
    assert.end();
});
