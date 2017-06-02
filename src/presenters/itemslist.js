/**
 * @description Controls Items view behaviour
 * @class Presenter
 */
module.exports = class Presenter
{
  constructor (view, fetchItemsListUseCase) {
    this.view = view;
    this.fetchItemsListUseCase = fetchItemsListUseCase;
  }
  viewWillAppear () {
    this.fetchItemsListUseCase
    .execute()
    .then(items => {
      this.view.showItems(items);
    })
    .catch(err => {
      //this.view.showError(err);
      console.log(err);
    });
  }
}
