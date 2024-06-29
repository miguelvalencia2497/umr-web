"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { useEffect, useState } from "react";
import { AuthNames } from "../../types/Users";
import StaffPatientView from "../../_staff/StaffPatientView";

type PatientViewProps = {
  params: { lng: string };
};

const PatientView: React.FC<PatientViewProps> = ({ params: { lng } }) => {
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
    <>{role === AuthNames.STAFF ? <StaffPatientView lng={lng} /> : <></>}</>
  );
};

export default PatientView;
