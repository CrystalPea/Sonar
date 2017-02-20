propertyList = new PropertyList();
propertyController = new PropertyController(propertyList);
propertyController.addPropertyListView();
propertyController.showSinglePropertyOnUrlChange("property-details");
propertyController.preventSubmit("search")
