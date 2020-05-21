export interface AllCountriesDataInterface {
    data: Country[];
    _cacheHit: boolean;
  }
  
  export interface Country {
    coordinates: Coordinates;
    name: string;
    code: string;
    population?: number;
    updated_at: string;
    today: Today;
    latest_data: LatestData;
    timeline: Timeline[];
  }
  
  export interface Coordinates {
    latitude?: number;
    longitude?: number;
  }
  
  export interface Today {
    deaths: number;
    confirmed: number;
  }
  
  export interface LatestData {
    deaths: number;
    confirmed: number;
    recovered: number;
    critical: number;
    calculated: Calculated;
  }
  
  export interface Calculated {
    death_rate?: number;
    recovery_rate?: number;
    recovered_vs_death_ratio: any;
    cases_per_million_population: number;
  }
  
  export interface Timeline {
    updated_at: string;
    date: string;
    deaths: number;
    confirmed: number;
    active: number;
    recovered: number;
    new_confirmed: number;
    new_recovered: number;
    new_deaths: number;
    is_in_progress?: boolean;
  }
  