"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { AuthNames } from "../types/Users";
import PatientDashboard from "../_patient/PatientDashboard";
import { useEffect, useState } from "react";
import AdminDashboard from "../_admin/AdminDashboard";
import { useAuth } from "@/app/contexts/AuthContext";
import StaffDashboard from "../_staff/StaffDashboard";

type DashboardProps = {
  params: { lng: string };
};

const Dashboard: React.FC<DashboardProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const user = useUser();
  const auth = useAuth();
  console.log("🚀 ~ authState:", auth);
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
      {auth?.data?.role === AuthNames.ADMIN ? (
        <AdminDashboard lng={lng} />
      ) : auth?.data?.role === AuthNames.STAFF ? (
        <StaffDashboard lng={lng} />
      ) : (
        <PatientDashboard lng={lng} />
      )}
    </>
  );
};

export default Dashboard;
