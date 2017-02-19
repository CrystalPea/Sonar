function PropertyList() {
  this._properties = []
};

PropertyList.prototype.addProperty = function(property) {
  this._properties.push(property);
};

PropertyList.prototype.returnPropertyList = function() {
  return this._properties
};

PropertyList.prototype.findProperty = function(hash) {
  return this._properties.filter(function(property){ return property[hash.attribute]() === hash.value });
};
