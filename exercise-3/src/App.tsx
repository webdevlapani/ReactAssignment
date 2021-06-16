import * as React from 'react';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import CountryData from './CountryData';
import ContinentData from './ContinentData';

import './styles.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

export const COUNTRY = gql`
  query country($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const CONTINENT = gql`
  query continent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        name
        emoji
      }
    }
  }
`;

const App = () => {
  const [countryCode, setCountryCode] = useState<string>('');
  const [continentCode, setContinentCode] = useState<string>('');

  const { data: countryData } = useQuery(COUNTRY, {
    variables: { code: countryCode },
    client,
  });

  const { data: continentData } = useQuery(CONTINENT, {
    variables: { code: continentCode },
    client,
  });

  return (
    <div className="continent-data-wrapper">
      <div className="continent-data-list">
        <input
          type="text"
          value={countryCode}
          onChange={(event) => setCountryCode(event.target.value)}
        />
        {countryData && (
          <CountryData countryData={countryData} countryCode={countryCode} />
        )}
      </div>
      <div className="continent-data-list">
        <input
          type="text"
          value={continentCode}
          onChange={(event) => setContinentCode(event.target.value)}
        />
        {continentData && (
          <div className="continent-data">
            <ContinentData continentData={continentData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
