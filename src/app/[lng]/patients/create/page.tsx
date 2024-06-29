"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { useEffect, useState } from "react";
import { AuthNames } from "../../types/Users";
import StaffPatientsCreate from "../../_staff/StaffPatientsCreate";

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
  return (
    <>{role === AuthNames.STAFF ? <StaffPatientsCreate lng={lng} /> : <></>}</>
  );
};

export default Patient;
