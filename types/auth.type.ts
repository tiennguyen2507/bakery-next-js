export type LoginRequest = { email: string; password: string };

export type LoginResponse = { access_token: string; refresh_token: string };

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type RegisterResponse = { access_token: string; refresh_token: string };
