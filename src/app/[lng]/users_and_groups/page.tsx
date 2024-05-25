"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { AuthNames } from "../types/Users";
import PatientDashboard from "../_patient/PatientDashboard";
import { useEffect, useState } from "react";
import AdminDashboard from "../_admin/AdminDashboard";
import AdminUsersAndGroups from "../_admin/AdminUsersAndGroups";
import { useAuth } from "@/app/contexts/AuthContext";
import StaffUsersAndGroups from "../_staff/StaffUsersAndGroups";

type UsersAndGroupsProps = {
  params: { lng: string };
};

const UsersAndGroups: React.FC<UsersAndGroupsProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const auth = useAuth();
  const user = useUser();

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
        <AdminUsersAndGroups lng={lng} />
      ) : auth?.data?.role === AuthNames.STAFF ? (
        <StaffUsersAndGroups lng={lng} />
      ) : (
        <StaffUsersAndGroups lng={lng} />
      )}
    </>
  );
};

export default UsersAndGroups;
