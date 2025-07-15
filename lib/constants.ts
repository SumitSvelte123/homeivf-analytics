import { IStats } from "@/types/auth.type";

export const SERVER_ERROR = "Something went wrong. Please try again";

export const STATS: IStats[] = [
  {
    title: "No. of OPD(s) Done",
    type: "OPD",
    image: "/icons/opd.svg",
    value: 32842,
    description: "Analytics for last week",
  },
  {
    title: "No. of IPD(s) Done",
    type: "IPD",
    image: "/icons/ipd.svg",
    value: 32842,
    description: "Analytics for last week",
  },
  {
    title: "No. of Patient(s) registered",
    type: "PATIENT",
    image: "/icons/patient.svg",
    value: 32842,
    description: "Analytics for last week",
  },
  {
    title: "No. of Blood test(s) booked",
    type: "BLOOD",
    image: "/icons/blood.svg",
    value: 32842,
    description: "Analytics for last week",
  },
  {
    title: "No. of Kit(s) booked",
    type: "KIT",
    image: "/icons/kits.svg",
    value: 32842,
    description: "Analytics for last week",
  },
  {
    title: "No. of Prescription(s) generated",
    type: "PRESCRIPTION",
    image: "/icons/pres.svg",
    value: 32842,
    description: "Analytics for last week",
  }
];
