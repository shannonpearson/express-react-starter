import React from 'react';
import { shallow } from 'enzyme';

const App = require('../src/client/App').default;

describe('App', () => {
  test('exists', () => {
    // Assert
    expect(App).toBeDefined();
  });
  test('mounts', () => {
    // Arrange
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    // Assert
    expect(wrapper.html()).toBeDefined();
  });
});
