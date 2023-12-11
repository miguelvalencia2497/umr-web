import DashboardCard from "@/app/components/dashboard/DashboardCard";
import { useTranslation } from "@/app/i18n/client";
import { BoxProps, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = { lng: string; boxProps?: BoxProps };

const QRCard: React.FC<Props> = ({ lng, boxProps }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      cardImage={
        <Image
          src="/card-qr.png"
          alt="qr"
          width={80}
          height={80}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      }
      onButtonClick={() => {
        console.log("button clicked");
      }}
      childrenWrapperProps={{ justifyContent: "space-between" }}
      boxProps={{ ...boxProps }}
    >
      <Stack spacing="4">
        <Text fontSize={["16px", "13px"]} fontWeight="700">
          {t("generate_your_qr_code")}
        </Text>
        <Text fontSize={["14px", "12px"]} fontWeight="400" noOfLines={2}>
          Use this QR code for Sed vehicula urna mattis faucibus eu erat neque
          bibendum.
        </Text>
      </Stack>
    </DashboardCard>
  );
};

export default QRCard;
