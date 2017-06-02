const ItemMapper = require('./itemmapper');
const request = require('superagent');

/**
 * @description Everything related to get all nested objects
 * @class OptionRepository
 */
module.exports = class ItemsListRepository
{
  fetchItems (callback) {
    request
    .get('https://jsonplaceholder.typicode.com/posts')
    .end((err, res) => {
      if (err) { return callback(err); }
      callback(err, res.body.map(ItemMapper.parseFromJSON));
    });
  }
}
