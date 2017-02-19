function PropertyListView(propertyList) {
  this._propertyList = propertyList
};

PropertyListView.prototype.listProperties = function(){
    properties = "<ul>";
    this._propertyList.returnPropertyList().forEach(function(element){
      properties += "<li><a href=\"#" + element.returnId() + "\">" + element.returnLocation() + "</a></li>";
    });
    properties += "</ul>";
    return properties;
  };
