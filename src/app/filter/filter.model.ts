export enum VISIBILITY_FILTER {
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_ALL = 'SHOW_ALL'
  }

  export interface SessionFilter {
    label: string;
    value: VISIBILITY_FILTER;
  }

  export const initialFilters: SessionFilter[] = [
    { label: 'All', value: VISIBILITY_FILTER.SHOW_ALL },
    { label: 'Completed', value: VISIBILITY_FILTER.SHOW_COMPLETED },
    { label: 'Active', value: VISIBILITY_FILTER.SHOW_ACTIVE }
  ];
