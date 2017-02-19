function PropertyController(propertyList) {

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
