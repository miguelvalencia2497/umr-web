import { User } from "../users_and_groups/types";

export type Patient = {
  first_name: string;
  last_name: string;
  uid: string;
  img_url: string;
  status: PatientStatus;
  triage_with?: User;
};

export enum PatientStatus {
  NEXT_IN_LINE_FOR_CONSULTATION = "next_in_line_for_consultation",
  NEXT_IN_LINE_FOR_TRIAGE = "next_in_line_for_triage",
  IN_TRIAGE = "in_triage",
  WAITING_IN_LINE = "waiting_in_line",
}

export enum PatientFilters {
  ALL_PATIENTS = "all_patients",
  INPATIENTS = "inpatients",
  OUTPATIENTS = "outpatients",
  ER_PATIENTS = "er_patients",
}

export enum AssignedToFilters {
  ASSIGNED_TO_ALL = "assigned_to_all",
  ASSIGNED_TO_ME = "assigned_to_me",
}
