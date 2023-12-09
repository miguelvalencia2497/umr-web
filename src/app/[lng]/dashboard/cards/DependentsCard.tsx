import DashboardCard from "@/app/components/dashboard/DashboardCard";
import { useTranslation } from "@/app/i18n/client";
import { titleize } from "@/app/utils/string";
import { BoxProps, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = { lng: string; boxProps?: BoxProps };

const DependentsCard: React.FC<Props> = ({ lng, boxProps }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      cardImage={
        <Image
          src="/card-dependents.png"
          alt="qr"
          width={70}
          height={70}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      }
      onButtonClick={() => {}}
      boxProps={{
        background: "#FAFFFF",
        border: "1px solid #D7E5E5",
        ...boxProps,
      }}
    >
      <Stack spacing="4">
        <Text fontSize="13px" fontWeight="700">
          {titleize(t("hmo_and_dependents"))}
        </Text>
        <Text fontSize="12px" fontWeight="400" noOfLines={2}>
          Add your HMO account or add dependents here, Dictum quis condimentum
          dictum maecenas.
        </Text>
      </Stack>
    </DashboardCard>
  );
};

export default DependentsCard;
