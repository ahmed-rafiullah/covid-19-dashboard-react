export interface GlobalTimelineInterface {
    data: Datum[];
    _cacheHit: boolean;
  }
  
  export interface Datum {
    updated_at: string;
    date: string;
    deaths: number;
    confirmed: number;
    recovered: number;
    active: number;
    new_confirmed: number;
    new_recovered: number;
    new_deaths: number;
    is_in_progress?: boolean;
  }
  