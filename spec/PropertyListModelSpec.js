describe("PropertyList", function() {
  var propertyList;
  var property_1;
  var property_2

  beforeEach(function() {
    propertyList = new PropertyList();
    property_1 = jasmine.createSpyObj('property_1', ['returnLocation']);
    property_1.returnLocation.and.callFake(function() {
      return "London";
    });
    property_2 = jasmine.createSpyObj('property_2', ['returnLocation']);
    property_2.returnLocation.and.callFake(function() {
      return "Brighton";
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

  describe("showing properties", function() {
    it("should return a list of properties", function() {
      propertyList.addProperty(property_1);
      expect(propertyList.returnPropertyList()).toEqual([property_1]);
    });

    it("should enable searching properties by attribute", function() {
      propertyList.addProperty(property_1);
      propertyList.addProperty(property_2);
      expect(propertyList.findProperty({attribute: "returnLocation", value: "Brighton"})).toEqual([property_2]);
    });
  });
});
