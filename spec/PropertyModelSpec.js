describe("Property", function() {
  var property;

  beforeEach(function() {
    property = new Property({location: "London", price: "Guide price £450,000", bedrooms: 1 });
  });

  it("should be created with location property", function() {
    expect(property._location).toEqual("London");
  });

  it("should be created with price property", function() {
    expect(property._price).toEqual("Guide price £450,000");
  });

  it("should be created with bedrooms property", function() {
    expect(property._bedrooms).toEqual(1);
  });
});
