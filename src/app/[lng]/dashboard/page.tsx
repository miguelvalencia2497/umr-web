"use client";
import Navbar from "@/app/components/common/Navbar";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { UserRole } from "../types/Users";
import PatientDashboard from "./patient/PatientDashboard";
import { useEffect, useState } from "react";

type DashboardProps = {
  params: { lng: string };
};

const Dashboard: React.FC<DashboardProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const user = useUser();

  //** Let's transfer this to a hook */
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  //* End of hook //
  if (!hydrated) return null;
  return (
    <>
      {user?.user_roles.includes(UserRole.ADMIN) ? (
        <>
          <Navbar lng={lng} />
          Admin Dashboard
        </>
      ) : (
        <PatientDashboard params={{ lng }} />
      )}
    </>
  );
};

export default Dashboard;
