function SinglePropertyView(property) {
  this._property = property
};

SinglePropertyView.prototype.showProperty = function() {
  return "<div>" + String(this._property.returnLocation()) + "</div>"
};
