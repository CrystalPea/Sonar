describe("Property", function() {
  var property;

  beforeEach(function() {
    property = new Property({location: "London"});
  });

  it("should be created with location property", function() {
    expect(property._location).toEqual("London");
  });
});
