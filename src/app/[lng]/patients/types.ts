export type Patient = {
  id: number;
  firstName: string;
  lastName: string;
  uid: string;
  img_url: string;
  status: PatientStatus;
  emailAddress: string;
  chief_complaint: string;
  last_visit_date: string;
  last_visit_time: string;
  dateOfBirth: string;
  civilStatus: string;
  gender: string;
  age: string;
  mobileNumber: string;
  homeAddress: string;
  hmoProvider: string;
  hmoAccountNumber: string;
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
