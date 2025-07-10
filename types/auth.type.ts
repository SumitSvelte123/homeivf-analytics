export interface ILogin {
  email: string;
  password: string;
}


export interface ILoginRes {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
    user: {
      fullName: string;
    };
  };
  uniqueReqId: string;
}