var describe = require("./app");

describe("testing", function(it) {
  it("loves me", function() {
    love({me: please()});
  });

  it("should just work", function() {
    assert("test" == best);
  });

  it("always works", function() {
    this.doesnt.exist();
  });

  it("never screws up", function() {
    never.screw({up: true});
  });

  it("hates failing", function() {
    {who: fails};
    [nobody];
  });
});
