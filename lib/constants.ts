import {
  IDashboardWeekMatrix,
  IStats,
  IWeekPerformanceStats,
} from "@/types/matrix.type";

export const SERVER_ERROR = "Something went wrong. Please try again";

export const STATS: IStats[] = [
  {
    accesskey: "opd_booked_count",
    title: "No. of OPD(s) Booked",
    type: "OPD_BOOKED",
    image: "/icons/opd.svg",
    value: 32842,
    description: "Analytics for OPD(s) Booked",
  },
  {
    accesskey: "opd_done_count",
    title: "No. of OPD(s) Done",
    type: "OPD_DONE",
    image: "/icons/ipd.svg",
    value: 32842,
    description: "Analytics for OPD(s) Done",
  },
  {
    accesskey: "patient_registered_count",
    title: "No. of Patient(s) Registered",
    type: "PATIENT",
    image: "/icons/patient.svg",
    value: 32842,
    description: "Analytics for Patient(s) Registered",
  },
  {
    accesskey: "blood_test_count",
    title: "No. of Blood test(s) Booked",
    type: "BLOOD",
    image: "/icons/blood.svg",
    value: 32842,
    description: "Analytics for Blood test(s) Booked",
  },
  {
    accesskey: "kits_count",
    title: "No. of Kit(s) Booked",
    type: "KIT",
    image: "/icons/kits.svg",
    value: 32842,
    description: "Analytics for Kit(s) Booked",
  },
  {
    accesskey: "prescription_count",
    title: "No. of Prescription(s) Generated",
    type: "PRESCRIPTION",
    image: "/icons/pres.svg",
    value: 32842,
    description: "Analytics for Prescription(s) Generated",
  },
  {
    accesskey: "patient_enrolled_count",
    title: "No. of Patient(s) Enrolled",
    type: "PATIENT_ENROLLED",
    image: "/icons/patient-enroll.svg",
    value: 32842,
    description: "Analytics for Patient(s) Enrolled",
  },
  {
    accesskey: "ipd_booked_count",
    title: "No. of IPD(s) Booked",
    type: "IPD_BOOKED",
    image: "/icons/ipd-booked.svg",
    value: 32842,
    description: "Analytics for IPD(s) Booked",
  },
  {
    accesskey: "ipd_done_count",
    title: "No. of IPD(s) Done",
    type: "IPD_DONE",
    image: "/icons/ipd-done.svg",
    value: 32842,
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
    title: "No. of Blood test(s) Booked",
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
