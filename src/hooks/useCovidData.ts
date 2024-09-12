import { useQuery } from 'react-query';

// TYPES
interface GlobalData {
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

export interface CountryData {
  country: string;
  countryInfo: {
    iso3: any;
    lat: number;
    long: number;
  };
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

// API CALLS

// Fetching worldwide data
const fetchGlobalData = async (): Promise<GlobalData> => {
  const response = await fetch('https://disease.sh/v3/covid-19/all');
  if (!response.ok) {
    throw new Error('Error fetching global data');
  }
  return response.json();
};

// Fetching country-specific data
const fetchCountryData = async (): Promise<CountryData[]> => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!response.ok) {
    throw new Error('Error fetching country data');
  }
  return response.json();
};

// Fetching historical data (for the chart)
const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await fetch(
    'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
  );
  if (!response.ok) {
    throw new Error('Error fetching historical data');
  }
  return response.json();
};

export const useCovidData = () => {
  // To Fetch global data
  const {
    data: globalData,
    isLoading: isLoadingGlobal,
    isError: isErrorGlobal,
  } =  useQuery<GlobalData, Error>({
    queryKey: ['globalData'],
    queryFn: fetchGlobalData,
  });

  // To Fetch country data
  const {
    data: countryData,
    isLoading: isLoadingCountries,
    isError: isErrorCountries,
  } = useQuery<CountryData[], Error>({
    queryKey: ['countryData'], 
    queryFn: fetchCountryData});

  // To Fetch historical data (for graph)
  const {
    data: historicalData,
    isLoading: isLoadingHistorical,
    isError: isErrorHistorical,
  } = useQuery<HistoricalData, Error>({
    queryKey:['historicalData'], 
    queryFn: fetchHistoricalData
});

  return {
    globalData,
    isLoadingGlobal,
    isErrorGlobal,
    countryData,
    isLoadingCountries,
    isErrorCountries,
    historicalData,
    isLoadingHistorical,
    isErrorHistorical,
  };
};
