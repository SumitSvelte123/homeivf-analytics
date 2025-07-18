export interface IStats {
  title: string;
  type: StatType;
  image: string;
  value: number;
  description?: string;  
  accesskey: keyof IDashboardMatrix;
}

export type StatType =
  | "OPD_BOOKED"
  | "OPD_DONE"
  | "PATIENT"
  | "BLOOD"
  | "KIT"
  | "PRESCRIPTION"
  | "PATIENT_ENROLLED"
  | "IPD_BOOKED"
  | "IPD_DONE";

export interface IDashboardMatrix {
  opd_booked_count: number;
  opd_done_count: number;
  ipd_booked_count: number;
  ipd_done_count: number;
  patient_registered_count: number;
  patient_enrolled_count: number;
  blood_test_count: number;
  kits_count: number;
  prescription_count: number;
}
