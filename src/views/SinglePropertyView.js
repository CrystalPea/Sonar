function SinglePropertyView(property) {
  this._property = property
};

SinglePropertyView.prototype.showProperty = function() {
  return "<div>" + this._property.returnLocation() + "</div>"
};
