import { useTranslation } from "@/app/i18n/client";
import { capitalize } from "@/app/utils/string";
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import Image from "next/image";
import Link from "next/link";

type Props = { lng: string; boxProps?: BoxProps };

const ConsultationCard: React.FC<Props> = ({ lng, boxProps }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      boxProps={{
        background: "#FAFFFF",
        border: "1px solid #D7E5E5",
        ...boxProps,
      }}
      cardImage={
        <Image
          src="/card-consultation.png"
          alt="qr"
          width={90}
          height={90}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      }
      childrenWrapperProps={{
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%",
        justifyContent: "space-between",
      }}
      onButtonClick={() => {}}
      buttonIcon={<MdAdd />}
      //?? For enabling dismissable
      // boxProps={{ background: "primary.900", color: "white.300" }}
      // isDismissable={true}
    >
      <Stack spacing="4">
        <Text fontSize={["16px", "13px"]} fontWeight="700">
          {capitalize(t("review_your_last_consultation"))}
        </Text>
        <Box>
          <Text fontSize={["14px", "12px"]} fontWeight="400">
            {capitalize(t("date_of_visit"))}
          </Text>
          <Text fontSize={["16px", "12px"]} fontWeight="500">
            Aug 20, 2023
          </Text>
        </Box>
        <Box>
          <Text fontSize={["14px", "12px"]} fontWeight="400">
            {capitalize(t("attending_physician"))}
          </Text>
          <Text fontSize={["16px", "12px"]} fontWeight="500">
            Dr Juan Eugonio
          </Text>
        </Box>
        <Box>
          <Text fontSize={["14px", "12px"]} fontWeight="400">
            {capitalize(t("diagnosis"))}
          </Text>
          <Text fontSize={["16px", "12px"]} fontWeight="500" noOfLines={2}>
            Sed vehicula urna mattis faucibus eu erat neque bibendum. Sed
            vehicula urna mattis faucibus eu erat neque bibendum.Sed vehicula
            urna mattis faucibus eu erat neque bibendum.
          </Text>
        </Box>
        {/* <Box>
          <Text fontSize="12px" fontWeight="400">
            {capitalize(t("disposition"))}
          </Text>
          <Text fontSize="12px" fontWeight="500">
            Recovered
          </Text>
        </Box> */}
        {/* <Box>
          <Link href="#">
            <Text
              fontSize={["14px", "12px"]}
              fontWeight="700"
              textDecoration="underline"
            >
              {capitalize(t("view_full_consultation_details"))}
            </Text>
          </Link>
        </Box> */}
      </Stack>
    </DashboardCard>
  );
};

export default ConsultationCard;
