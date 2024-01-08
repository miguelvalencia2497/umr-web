import DashboardCard from "@/app/components/dashboard/DashboardCard";
import { useTranslation } from "@/app/i18n/client";
import { capitalize, titleize } from "@/app/utils/string";
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdAdd } from "react-icons/md";

type Props = { lng: string; boxProps?: BoxProps };

const MedicationCard: React.FC<Props> = ({ lng, boxProps }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      cardImage={
        <Image
          src="/card-medication.png"
          alt="qr"
          width={80}
          height={80}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      }
      childrenWrapperProps={{
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%",
        justifyContent: "space-between",
      }}
      onButtonClick={() => {
        console.log("button clicked");
      }}
      buttonIcon={<MdAdd />}
      boxProps={{
        background: "white.700",
        border: "1px solid #D7E5E5",
        ...boxProps,
      }}
    >
      <Stack spacing="4">
        <Text fontSize={["16px", "13px"]} fontWeight="700" mb="2">
          {titleize(t("review_current_medication_list"))}
        </Text>
        <Box>
          <Text fontSize={["14px", "12px"]} fontWeight="400">
            {capitalize(t("prescribed_date"))}
          </Text>
          <Text fontSize={["16px", "12px"]} fontWeight="500">
            Aug 20, 2023
          </Text>
        </Box>
        <Box>
          <Text fontSize={["14px", "12px"]} fontWeight="400">
            {capitalize(t("medication"))}
          </Text>
          <Text fontSize={["16px", "12px"]} fontWeight="500">
            FeS04 tab #30, Sig: A.D.
          </Text>
          <Text fontSize={["16px", "12px"]} fontWeight="500">
            Ascorbic acid #30, 500mg tab, Sig: Once a day
          </Text>
        </Box>
      </Stack>
    </DashboardCard>
  );
};

export default MedicationCard;
