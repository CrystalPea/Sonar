describe("SinglePropertyView", function() {
  var property;

  beforeEach(function() {
    property = jasmine.createSpyObj('property', ['returnLocation']);
    property.returnLocation.and.callFake(function() {
      return "London";
    });
    singlePropertyView = new SinglePropertyView(property);
  });

  describe("singlePropertyView creation", function() {
    it("should be created with a PropertyModel instance", function() {
      expect(singlePropertyView._property).toEqual(property);
    });
  });
  describe("viewing property", function() {
    it("show property with HTML wrappers", function() {
      var pattern = "<div>London</div>"
      expect(singlePropertyView.showProperty()).toEqual(pattern);
    });
  });

});
