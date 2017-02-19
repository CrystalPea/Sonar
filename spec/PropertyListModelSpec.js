describe("PropertyList", function() {
  var propertyList;
  var property_1;
  var property_2

  beforeEach(function() {
    propertyList = new PropertyList();
    property_1 = jasmine.createSpyObj('property_1', ['location']);
    property_1.location.and.callFake(function() {
      return "London";
    });
});

  describe("propertyList creation", function() {
    it("should be created with an empty properties array attribute", function() {
      expect(propertyList._properties).toEqual([]);
    });
  });

  describe("adding properties", function() {
    it("should enable property adding", function() {
      propertyList.addProperty(property_1);
      expect(propertyList._properties).toEqual([property_1]);
    });
  });

});
