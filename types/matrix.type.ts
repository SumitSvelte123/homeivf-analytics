export interface IStats {
  title: string;
  type: StatType;
  image: string;
  value: number;
  description?: string;
  accesskey: keyof IDashboardMatrix;
  slug: string;
}

export type StatType =
  | "OPD_BOOKED"
  | "OPD_DONE"
  | "PATIENT"
  | "MALE"
  | "FEMALE"
  | "BLOOD"
  | "KIT"
  | "PRESCRIPTION"
  | "PATIENT_ENROLLED"
  | "IPD_BOOKED"
  | "IPD_DONE"
  | "IPD_PARTIAL";

export interface IDashboardMatrix {
  opd_booked_count: number;
  opd_done_count: number;
  ipd_booked_count: number;
  ipd_done_count: number;
  ipd_partial_count: number;
  patient_registered_count: number;
  patient_registered_male_count: number;
  patient_registered_female_count: number;
  patient_enrolled_count: number;
  blood_test_count: number;
  kits_count: number;
  prescription_count: number;
}

export interface IPackageMatrix {
  package: string;
  count: number;
}

export interface IDashboardWeekMatrix {
  opd_booked: number;
  opd_done: number;
  ipd_booked: number;
  ipd_done: number;
  patient_registered: number;
  patient_enrolled: number;
  blood_test: number;
  kits: number;
  prescription: number;
}
export interface IWeekPerformanceStats {
  title: string;
  type: StatType;
  image: string;
}

export type IGrowthType = "positive" | "no_change" | "negative";

export interface IWeekPerformance {
  item: keyof IDashboardWeekMatrix;
  this_week_count: number;
  growth_status: IGrowthType;
  this_week_growth_compared_previous_week: string;
}
