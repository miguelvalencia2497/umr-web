import DashboardCard from "@/app/components/dashboard/DashboardCard";
import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdAdd } from "react-icons/md";

type Props = { lng: string; boxProps?: BoxProps };

const FollowUpCard: React.FC<Props> = ({ lng, boxProps }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      cardImage={
        <Image
          src="/card-followup.png"
          alt="qr"
          width={80}
          height={80}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      }
      childrenWrapperProps={{
        flexDirection: "column",
        gap: "2",
        alignItems: "flex-start",
        height: "100%",
        justifyContent: "space-between",
      }}
      onButtonClick={() => {
        console.log("button clicked");
      }}
      buttonIcon={<MdAdd />}
      boxProps={{ ...boxProps }}
    >
      <Stack spacing="4">
        <Text fontSize="13px" fontWeight="700" mb="2">
          {t("upcoming_follow_ups")}
        </Text>
        <Box>
          <Text fontSize="12px" fontWeight="400">
            {capitalize(t("follow_up_date"))}
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Sep 30, 2023, 4:30 PM
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="400">
            {capitalize(t("attending_physician"))}
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Dr. Juwan Eugenio
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" fontWeight="400">
            {capitalize(t("clinic_or_hospital_address"))}
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Clinic Name
          </Text>
          <Text fontSize="12px" fontWeight="500">
            123 Street name, City, Zip code
          </Text>
        </Box>
      </Stack>
    </DashboardCard>
  );
};

export default FollowUpCard;
