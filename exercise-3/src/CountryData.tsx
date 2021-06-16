import * as React from 'react';

interface Language {
  name: string;
}

export interface Country {
  name: string;
  currency: string;
  emoji: string;
  languages: Language[];
}

interface CountryData {
  country: Country;
}

interface Props {
  countryCode: string;
  countryData: CountryData;
}

const CountryData = (props: Props) => {
  const { countryData, countryCode } = props;

  const languages = countryData?.country?.languages?.map(
    (language: Language) => language.name
  );

  return (
    <>
      <p>Name: {countryData?.country?.name}</p>
      <p>Code: {countryCode}</p>
      <p>Flag: {countryData?.country?.emoji}</p>
      <p>Currency: {countryData?.country?.currency}</p>
      <p>Languages: {languages}</p>
    </>
  );
};

export default CountryData;
