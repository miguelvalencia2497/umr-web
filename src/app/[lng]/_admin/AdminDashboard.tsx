"use client";

import SideNavigation from "@/app/components/common/SideNavigation/SideNavigation";
import AdminWrapper from "./AdminWrapper";

type Props = {
  lng: string;
};

const AdminDashboard: React.FC<Props> = ({ lng, ...props }) => {
  return <AdminWrapper lng={lng}>Admin Dashboard</AdminWrapper>;
};

export default AdminDashboard;
