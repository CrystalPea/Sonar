function PropertyList() {
  this._properties = []
};

PropertyList.prototype.addProperty = function(property) {
  this._properties.push(property);
};
