"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { useEffect, useState } from "react";
import AdmingGroupsCreate from "@/app/[lng]/_admin/AdminGroupsCreate";
import { AuthNames } from "@/app/[lng]/types/Users";
import { useAuth } from "@/app/contexts/AuthContext";
import StaffGroupsCreate from "@/app/[lng]/_staff/StaffGroupsCreate";

type UsersAndGroupsProps = {
  params: { lng: string };
};

const UsersAndGroups: React.FC<UsersAndGroupsProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const user = useUser();
  const auth = useAuth();

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
        <AdmingGroupsCreate lng={lng} />
      ) : auth?.data?.role === AuthNames.STAFF ? (
        <StaffGroupsCreate lng={lng} />
      ) : null}
    </>
  );
};

export default UsersAndGroups;
