describe("Property", function() {
  var property;

  beforeEach(function() {
    property = new Property({location: "London", price: "Guide price £450,000", bedrooms: 1, id: 9384109 });
  });
  describe("on creation", function() {
    it("should be created with location attribute", function() {
      expect(property._location).toEqual("London");
    });

    it("should be created with price attribute", function() {
      expect(property._price).toEqual("Guide price £450,000");
    });

    it("should be created with bedrooms attribute", function() {
      expect(property._bedrooms).toEqual(1);
    });

    it("should be created with id attribute", function() {
      expect(property._id).toEqual(9384109);
    });
  });

  describe("reading attributes", function() {
    it("should return property location", function() {
      expect(property.returnLocation()).toEqual("London");
    });
  });
});
