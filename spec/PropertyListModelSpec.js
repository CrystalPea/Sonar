describe("PropertyList", function() {
  var propertyList;
  var property_1;
  var property_2

  beforeEach(function() {
    propertyList = new PropertyList();
    property_1 = jasmine.createSpyObj('property_1', ['returnLocation', 'returnId']);
    property_1.returnLocation.and.callFake(function() {
      return "London";
    });
    property_1.returnId.and.callFake(function() {
      return 12;
    });
    property_2 = jasmine.createSpyObj('property_2', ['returnLocation', 'returnId']);
    property_2.returnLocation.and.callFake(function() {
      return "Brighton";
    });
    property_2.returnId.and.callFake(function() {
      return 14;
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

    it("should enable creating and simultaneous adding a property", function() {
      propertyList.createProperty({location: "London"});
      expect(propertyList.returnPropertyList()[0].returnLocation()).toEqual("London");
    });
  });

  describe("showing properties", function() {
    it("should return a list of properties", function() {
      propertyList.addProperty(property_1);
      expect(propertyList.returnPropertyList()).toEqual([property_1]);
    });

    it("should enable finding property by ID", function() {
      propertyList.addProperty(property_1);
      propertyList.addProperty(property_2);
      debugger;
      expect(propertyList.findProperty(14)).toEqual(property_2);
    });
  });
});
