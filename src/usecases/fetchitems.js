/**
 * @description Fetches all items
 * @class FetchItems
 */
module.exports = class FetchItems
{
  constructor (repository) {
    if (!repository) throw new Error(`${this.constructor.name} class error Dependency Injection!`);
    this.repository = repository;
  }
  execute () {
    return new Promise((resolve, reject) => {
      this.repository.fetchItems((err, items) => {
        err ? reject(new Error(err)) : resolve(items);
      });
    });
  }
}
