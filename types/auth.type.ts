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

export interface IStats {
  title: string;
  type: StatType;
  image: string;
  value: number;
  description: string;
}

export type StatType =
  | "OPD"
  | "IPD"
  | "PATIENT"
  | "BLOOD"
  | "KIT"
  | "PRESCRIPTION"
