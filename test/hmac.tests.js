var assert = require("assert");
var createHmac = require("../src/hmac");

describe("hmac", function() {
  it("createHmac", function() {
    return createHmac("sha256", "password").then(function(fingerprint) {
      assert.equal(
        "e56a207acd1e6714735487c199c6f095844b7cc8e5971d86c003a7b6f36ef51e",
        fingerprint
      );
    });
  });
  it("createHmac and update", function() {
    return createHmac("sha256", "password", "salt").then(function(fingerprint) {
      assert.equal(
        "fc328232993ff34ca56631e4a101d60393cad12171997ee0b562bf7852b2fed0",
        fingerprint
      );
    });
  });
});
