import Navbar from "@/app/components/common/Navbar";

type DashboardProps = {
  params: { lng: string };
};

const Dashboard: React.FC<DashboardProps> = ({ params: { lng } }) => {
  return (
    <>
      <Navbar lng={lng} />
    </>
  );
};

export default Dashboard;
