describe("PropertyListView", function() {
  var propertyListView
  var propertyList;
  var property_1;
  var property_2

  beforeEach(function() {
    property_1 = jasmine.createSpyObj('property_1', ['returnLocation']);
    property_1.returnLocation.and.callFake(function() {
      return "London";
    });
    property_2 = jasmine.createSpyObj('property_2', ['returnLocation']);
    property_2.returnLocation.and.callFake(function() {
      return "Brighton";
    });
    propertyList = jasmine.createSpyObj('propertyList', ['returnPropertyList']);
    propertyList.returnPropertyList.and.callFake(function() {
      return "London";
    });
    propertyListView = new PropertyListView(propertyList);
});

  describe("propertyList creation", function() {
    it("should be created with a PropertyList instance", function() {
      expect(propertyListView._propertyList).toEqual(propertyList);
    });
  });
});
