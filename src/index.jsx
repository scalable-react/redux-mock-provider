import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const defaultMiddleWares = [thunk];

export const getMockStore = ({
  key = 'initialState',
  state,
  middlewares = defaultMiddleWares,
}) => {
  const mockStore = configureMockStore(middlewares);
  return mockStore({ [`${key}`]: state });
};

const MockProvider = ({ store, children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

MockProvider.propTypes = {
  children: React.PropTypes.node.isRequired,
  store: React.PropTypes.Object.isRequired,
};

export default MockProvider;
