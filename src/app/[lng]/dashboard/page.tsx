"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { AuthNames } from "../types/Users";
import PatientDashboard from "../_patient/PatientDashboard";
import { useEffect, useState } from "react";
import AdminDashboard from "../_admin/AdminDashboard";

type DashboardProps = {
  params: { lng: string };
};

const Dashboard: React.FC<DashboardProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const user = useUser();
  console.log("🚀 ~ user:", user);

  //** Let's transfer this to a hook */
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  //* End of hook //
  if (!hydrated || !user) return null;
  return (
    <>
      {user?.authorityNames.includes(AuthNames.ADMIN) ? (
        <AdminDashboard lng={lng} />
      ) : (
        <PatientDashboard lng={lng} />
      )}
    </>
  );
};

export default Dashboard;
