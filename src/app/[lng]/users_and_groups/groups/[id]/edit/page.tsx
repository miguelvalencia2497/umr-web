"use client";
import { useTranslation } from "@/app/i18n/client";
import { useUser } from "@/app/contexts/UserContext";
import { useEffect, useState } from "react";
import AdmingGroupsCreate from "@/app/[lng]/_admin/AdminGroupsCreate";
import { AuthNames } from "@/app/[lng]/types/Users";
import { useAuth } from "@/app/contexts/AuthContext";
import StaffGroupsCreate from "@/app/[lng]/_staff/StaffGroupsCreate";
import { useParams } from "next/navigation";
import { getGroupById } from "@/app/api/groups";
import { useQuery } from "react-query";

type UsersAndGroupsProps = {
  params: { lng: string };
};

const UsersAndGroups: React.FC<UsersAndGroupsProps> = ({ params: { lng } }) => {
  const { t } = useTranslation(lng);
  const user = useUser();
  const { id } = useParams();
  const role = localStorage.getItem("authRole");

  //** Let's transfer this to a hook */
  const [hydrated, setHydrated] = useState(false);

  const { data: group } = useQuery(["group", id], () => {
    return getGroupById(Number(id));
  });

  useEffect(() => {
    setHydrated(true);
  }, []);

  //* End of hook //
  if (!hydrated || !user) return null;
  return (
    <>
      {role === AuthNames.ADMIN ? (
        <AdmingGroupsCreate lng={lng} />
      ) : role === AuthNames.STAFF ? (
        <StaffGroupsCreate lng={lng} group={group?.data} />
      ) : null}
    </>
  );
};

export default UsersAndGroups;
