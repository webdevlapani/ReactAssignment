import * as React from 'react';
import { Country } from './CountryData';

interface Continent {
  name: string;
  countries: Country[];
}

interface ContinentData {
  continent: Continent;
}

interface Props {
  continentData?: ContinentData;
}

const ContinentData = (props: Props) => {
  const { continentData } = props;

  const countries = continentData?.continent?.countries?.map(
    (country: Country) => {
      return (
        <p key={country.name}>
          <span>
            {country.emoji} {country.name}
          </span>
        </p>
      );
    }
  );

  return <>{countries}</>;
};

export default ContinentData;
