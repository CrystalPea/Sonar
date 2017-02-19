describe("PropertyList", function() {
  var propertyList;
  var property;

  beforeEach(function() {
    propertyList = new PropertyList();
});

  describe("propertyList creation", function() {
    it("should be created with an empty listOfProperties array attribute", function() {
      expect(propertyList._listOfProperties).toEqual([]);
    });
  });
});
