'use strict';

var dbInterface = require('./dbInterface');

var Collection = module.exports = function Collection(colName) {
  this.colName = colName;
};

Collection.prototype.getCollectionName = function () {
  return this.colName;
};

Collection.prototype.create = function (data, callback) {
  dbInterface.create(this.colName, data, callback);
};

Collection.prototype.update = function (guid, data, callback) {
  dbInterface.update(this.colName, guid, data, callback);
};

Collection.prototype.read = function (guid, callback) {
  dbInterface.read(this.colName, guid, callback);
};

Collection.prototype.remove = function (guid, callback) {
  dbInterface.remove(this.colName, guid, callback);
};

Collection.prototype.truncate = function (callback) {
  dbInterface.truncate(this.colName, callback);
};

Collection.prototype.find = function(params, callback) {
  dbInterface.find(this.colName, params, callback);
};

Collection.prototype.findOne = function(params, callback) {
  dbInterface.findOne(this.colName, params, callback);
};

Collection.prototype.findBy = function (prop, val, callback) {
  var query = {};
  query[prop] = val;

  this.find(query, callback);
};
