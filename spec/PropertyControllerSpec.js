describe("PropertyController", function() {
  var propertyController;
  var propertyList;
  var property_1;
  var property_2;

  beforeEach(function() {
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
    propertyList = jasmine.createSpyObj('propertyList', ['returnPropertyList']);
    propertyList.returnPropertyList.and.callFake(function() {
      return [property_1, property_2];
    });
    propertyController = new PropertyController(propertyList);
});

  describe("propertyListView creation", function() {
    it("should be created with a PropertyList instance", function() {
      expect(propertyController._propertyList).toEqual(propertyList);
    });
  });
});
