"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { AuthNames } from "../types/Users";
import { useEffect, useState } from "react";
import StaffPatients from "../_staff/StaffPatients";

type PatientProps = {
  params: { lng: string };
};

const Patient: React.FC<PatientProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const user = useUser();
  const role = localStorage.getItem("authRole");

  // //** Let's transfer this to a hook */
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  //* End of hook //
  if (!hydrated || !user) return null;
  return <>{role === AuthNames.STAFF ? <StaffPatients lng={lng} /> : <></>}</>;
};

export default Patient;
