import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './App';

test('App component is loaded', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Unit test for mobx state', () => {});
