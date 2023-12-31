"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { UserRole } from "../types/Users";
import PatientDashboard from "../_patient/PatientDashboard";
import { useEffect, useState } from "react";
import AdminDashboard from "../_admin/AdminDashboard";
import AdminUsersAndGroups from "../_admin/AdminUsersAndGroups";

type UsersAndGroupsProps = {
  params: { lng: string };
};

const UsersAndGroups: React.FC<UsersAndGroupsProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
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
      {user?.user_roles.includes(UserRole.ADMIN) ? (
        <AdminUsersAndGroups lng={lng} />
      ) : null}
    </>
  );
};

export default UsersAndGroups;
