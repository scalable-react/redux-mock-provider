import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

const defaultMiddleWares = [thunk];

export const getMockStore = ({
  key = 'initialState',
  state,
  middlewares = defaultMiddleWares,
}) => configureMockStore(middlewares)({ [key]: state });

const MockProvider = ({ store, children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

MockProvider.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default MockProvider;
