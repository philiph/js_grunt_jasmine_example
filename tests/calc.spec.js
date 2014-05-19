describe("something", function() {

  it("should do something", function() {
    expect(true).toBe(true);
  });

  it("should pass", function() {
    var a = 1 + 1;
    expect(a).toBe(2);
  });

});


describe("Calculator", function() {

  var calc;

  beforeEach(function() {
    calc = new Calculator();
  });

  it("should be able to created", function() {
    expect(calc).toBeDefined();
    expect(calc).not.toBe(null);
  })

  describe("add", function() {

    it("should correctly add 1 + 3", function() {
      var result = calc.add(1, 3);
      expect(result).toBe(4);
    });

  });

});
