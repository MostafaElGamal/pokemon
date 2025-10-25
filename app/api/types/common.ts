export interface AppPaginationResponse<T> {
  results: Array<T>;
  count?: number;
}
