import {
  IDashboardWeekMatrix,
  IStats,
  IWeekPerformanceStats,
} from "@/types/matrix.type";

export const SERVER_ERROR = "Something went wrong. Please try again";

export const STATS: IStats[] = [
  {
    slug: "opd-booked",
    accesskey: "opd_booked_count",
    title: "No. of OPD(s) Booked",
    type: "OPD_BOOKED",
    image: "/icons/opd.svg",
    value: 0,
    description: "Analytics for OPD(s) Booked",
  },
  {
    slug: "opd-done",
    accesskey: "opd_done_count",
    title: "No. of OPD(s) Done",
    type: "OPD_DONE",
    image: "/icons/ipd.svg",
    value: 0,
    description: "Analytics for OPD(s) Done",
  },
  {
    slug: "patient-registered",
    accesskey: "patient_registered_count",
    title: "No. of Patient(s) Registered",
    type: "PATIENT",
    image: "/icons/patient.svg",
    value: 0,
    description: "Analytics for Patient(s) Registered",
  },
  {
    slug: "patient-registered-female",
    accesskey: "patient_registered_female_count",
    title: "No. of Patient(s) Female",
    type: "FEMALE",
    image: "/icons/female.svg",
    value: 0,
    description: "Analytics for Female Patient(s)",
  },
  {
    slug: "patient-registered-male",
    accesskey: "patient_registered_male_count",
    title: "No. of Patient(s) Male",
    type: "MALE",
    image: "/icons/male.svg",
    value: 0,
    description: "Analytics for Male Patient(s)",
  },
  {
    slug: "blood-test",
    accesskey: "blood_test_count",
    title: "No. of Blood Test(s) Booked",
    type: "BLOOD",
    image: "/icons/blood.svg",
    value: 0,
    description: "Analytics for Blood test(s) Booked",
  },
  {
    slug: "kits",
    accesskey: "kits_count",
    title: "No. of Kit(s) Booked",
    type: "KIT",
    image: "/icons/kits.svg",
    value: 0,
    description: "Analytics for Kit(s) Booked",
  },
  {
    slug: "prescription",
    accesskey: "prescription_count",
    title: "No. of Prescription(s) Generated",
    type: "PRESCRIPTION",
    image: "/icons/pres.svg",
    value: 0,
    description: "Analytics for Prescription(s) Generated",
  },
  {
    slug: "patient-enrolled",
    accesskey: "patient_enrolled_count",
    title: "No. of Patient(s) Enrolled",
    type: "PATIENT_ENROLLED",
    image: "/icons/patient-enroll.svg",
    value: 0,
    description: "Analytics for Patient(s) Enrolled",
  },
  {
    slug: "ipd-booked",
    accesskey: "ipd_booked_count",
    title: "No. of IPD(s) Booked",
    type: "IPD_BOOKED",
    image: "/icons/ipd-booked.svg",
    value: 0,
    description: "Analytics for IPD(s) Booked",
  },
  {
    slug: "ipd-partial",
    accesskey: "ipd_partial_count",
    title: "No. of IPD(s) Partial",
    type: "IPD_PARTIAL",
    image: "/icons/ipd-partial.svg",
    value: 0,
    description: "Analytics for IPD(s) Partial",
  },
  {
    slug: "ipd-done",
    accesskey: "ipd_done_count",
    title: "No. of IPD(s) Done",
    type: "IPD_DONE",
    image: "/icons/ipd-done.svg",
    value: 0,
    description: "Analytics for IPD(s) Done",
  },
];

export const WEEK_STATS: {
  [K in keyof IDashboardWeekMatrix]: IWeekPerformanceStats;
} = {
  opd_booked: {
    title: "No. of OPD(s) Booked",
    type: "OPD_BOOKED",
    image: "/icons/opd.svg",
  },
  opd_done: {
    title: "No. of OPD(s) Done",
    type: "OPD_DONE",
    image: "/icons/ipd.svg",
  },
  patient_registered: {
    title: "No. of Patient(s) Registered",
    type: "PATIENT",
    image: "/icons/patient.svg",
  },
  blood_test: {
    title: "No. of Blood Test(s) Booked",
    type: "BLOOD",
    image: "/icons/blood.svg",
  },
  kits: {
    title: "No. of Kit(s) Booked",
    type: "KIT",
    image: "/icons/kits.svg",
  },
  prescription: {
    title: "No. of Prescription(s) Generated",
    type: "PRESCRIPTION",
    image: "/icons/pres.svg",
  },
  patient_enrolled: {
    title: "No. of Patient(s) Enrolled",
    type: "PATIENT_ENROLLED",
    image: "/icons/patient-enroll.svg",
  },
  ipd_booked: {
    title: "No. of IPD(s) Booked",
    type: "IPD_BOOKED",
    image: "/icons/ipd-booked.svg",
  },
  ipd_done: {
    title: "No. of IPD(s) Done",
    type: "IPD_DONE",
    image: "/icons/ipd-done.svg",
  },
};
