function PropertyController(propertyList) {
  var self = this;
  this._propertyList = propertyList
};

PropertyController.prototype.addProperty = function(hash){
    this._propertyList.createProperty(hash);
};

PropertyController.prototype.addPropertyListView = function(){
    this.propertyListView = new PropertyListView(this._propertyList);
};

PropertyController.prototype.updateHTML = function(id){
   var getPropertyList = this.propertyListView.listProperties();
   var propertyDisplay = document.getElementById(id);
   propertyDisplay.innerHTML = getPropertyList;
 };

 PropertyController.prototype.showSinglePropertyOnUrlChange = function(app){
  var self = this;
  window.addEventListener("hashchange", function(){
    var id = window.location.href.split("#")[1]
    var property = self._propertyList.findProperty(parseInt(id));
    var singlePropertyView = new SinglePropertyView(property);
    var propertyDisplay = document.getElementById(app);
    propertyDisplay.innerHTML = singlePropertyView.showProperty();
  });
};
