const ItemMapper = require('./item.mapper');
const request = require('superagent');

/**
 * @description Everything related to Item model
 * @class ItemRepository
 */
module.exports = class ItemRepository
{
  fetchItems (callback) {
    request
    .get('https://jsonplaceholder.typicode.com/posts')
    .end((err, res) => {
      err ? callback(err) : callback(err, res.body.map(ItemMapper.parseFromJSON));
    });
  }
}
