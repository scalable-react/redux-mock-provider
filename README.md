# Redux Mock Provider

A simple utility to be used for testing React Redux applications.

# Getting started
To install, run
```
npm install --save-dev redux-mock-provider
```

# Usage
To use the provider in your testing utils, simple import it.  You can either pass your own store to the component, of you can also use the getMockStore helper function, passing in the initialState from your reducer, plus a key that corresponds to the reducer's name.

```
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Header } from 'components';
import { initialState } from 'components/Auth/reducer';

import MockProvider, { getMockStore } from 'redux-mock-provider';

const store = getMockStore({
  key: 'auth',
  state: initialState
});

describe('<Header /> component', () => {
  const component = mount(
    <MockProvider store={store}>
      <Header />
    </MockProvider>
  );
  // ... tests go here.
});
```
