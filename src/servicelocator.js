const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./views/App');
const Presenter = require('./presenters/itemslist');
const ItemsListRepository = require('./model/itemslistrepository');
const FetchItemsListUseCase = require('./usecases/fetchitems');

module.exports = class ServiceLocator
{
  static provideRoot (config) {
    const fetchItemsListUseCase = new FetchItemsListUseCase(new ItemsListRepository());
    const listView = ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
    const itemsListPresenter = new Presenter(listView, fetchItemsListUseCase);
    listView.eventHandler = itemsListPresenter;

    return listView;
  }
}
