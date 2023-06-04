export interface LanType {
  tag: "en" | "fr" | "bn";
  label: string;
  icon?: any;
}

export interface PlanType {
  id: number;
  name: string;
  requests_total: number;
  requests_used: number;
  requests_available: number;
}

export interface UserType {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
  token?: string;
  plan?: PlanType;
}

export interface ApiTextType {
  text: "wrong_credentials" | "login_successful";
}

export interface ApiResponseType {
  message?: "wrong_credentials" | "login_successful";
  status?: number;
  data?: any;
  errors?: any;
  links?: any;
  meta?: {
    current_page?: number;
    from?: number;
    last_page?: number;
  };
}

export interface ApiErrorType {
  response: ApiResponseType;
}

export interface TableColumnType {
  label: string;
  value: string;
}

export interface TableSortItemType {
  label: string;
  value: string;
  dir: "asc" | "desc";
}
