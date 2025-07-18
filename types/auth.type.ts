export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginRes {
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
    expiresIn: string;
    role_type: string
  }
}

