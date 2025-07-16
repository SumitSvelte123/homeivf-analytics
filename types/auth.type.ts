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
