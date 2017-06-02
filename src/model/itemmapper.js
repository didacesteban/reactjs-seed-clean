const Item = require('./item');

const parseFromJSON = function (json)
{
  return new Item(json.title, json.body);
}

module.exports = {
  parseFromJSON
};
