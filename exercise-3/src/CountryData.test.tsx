import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CountryData from './CountryData';

test('Country data is loaded', () => {
  const mock = {
    country: {
      name: 'India',
      emoji: '🇮🇳',
      currency: 'INR',
      languages: [
        {
          name: 'Hindi',
        },
        {
          name: 'English',
        },
      ],
    },
  };

  const component = renderer.create(
    <CountryData countryData={mock} countryCode="" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
