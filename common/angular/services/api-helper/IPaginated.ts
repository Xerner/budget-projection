export interface IPaginatedResponse<T> {
  values: T[];
  pagelen: number;
  size: number;
  page: number;
  next: string;
}
