var assert = require("assert"),
    approximateSearch = require("../src/index");


describe("approximateSearch(query, text)", function() {
    it("should match query in text approximately", function() {
        assert.equal(approximateSearch("twl", "cartwheel"), true);
        assert.equal(approximateSearch("cart", "cartwheel"), true);
        assert.equal(approximateSearch("cw", "cartwheel"), true);
        assert.equal(approximateSearch("ee", "cartwheel"), true);
        assert.equal(approximateSearch("art", "cartwheel"), true);
        assert.equal(approximateSearch("eeel", "cartwheel"), false);
        assert.equal(approximateSearch("dog", "cartwheel"), false);
    });
});
