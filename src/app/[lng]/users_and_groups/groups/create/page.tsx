"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { useEffect, useState } from "react";
import AdmingGroupsCreate from "@/app/[lng]/_admin/AdminGroupsCreate";
import { UserRole } from "@/app/[lng]/types/Users";

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
        <AdmingGroupsCreate lng={lng} />
      ) : null}
    </>
  );
};

export default UsersAndGroups;
