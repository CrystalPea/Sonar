function Property(hash) {
this._location = hash.location;
this._price = hash.price;
this._bedrooms = hash.bedrooms;
this._id = hash.id;
}

Property.prototype.returnLocation = function() {
  return this._location
};

Property.prototype.returnPrice = function() {
  return this._price
};

Property.prototype.returnBedrooms = function() {
  return this._bedrooms
};

Property.prototype.returnId = function() {
  return this._id
};
