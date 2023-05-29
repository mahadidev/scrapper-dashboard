export interface LanType {
  tag: "en" | "fr" | "bn";
  label: string;
  icon?: any;
}

export interface UserType {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
  token?: string;
}

export interface ApiTextType {
  text: "wrong_credentials" | "login_successful";
}

export interface ApiResponseType {
  message: "wrong_credentials" | "login_successful";
  status: number;
  data?: any;
  errors?: any;
}

export interface ApiErrorType {
  response: ApiResponseType;
}
