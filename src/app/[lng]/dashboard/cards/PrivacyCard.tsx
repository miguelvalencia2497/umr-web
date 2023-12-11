import DashboardCard from "@/app/components/dashboard/DashboardCard";
import { useTranslation } from "@/app/i18n/client";
import { titleize } from "@/app/utils/string";
import { BoxProps, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = { lng: string; boxProps?: BoxProps };

const PrivacyCard: React.FC<Props> = ({ lng, boxProps }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      cardImage={
        <Image
          src="/card-privacy.png"
          alt="qr"
          width={30}
          height={30}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      }
      onButtonClick={() => {}}
      childrenWrapperProps={{ justifyContent: "space-between" }}
      boxProps={{
        background: "#FAFFFF",
        border: "1px solid #D7E5E5",
        ...boxProps,
      }}
    >
      <Stack spacing="4">
        <Text fontSize={["16px", "13px"]} fontWeight="700">
          {titleize(t("privacy_and_policy"))}
        </Text>
        <Text fontSize={["14px", "12px"]} fontWeight="400" noOfLines={2}>
          What you can do with your account? Link your GCash, Debit or Credit
          card or Bank account here sed vehicula urna mattis faucibus eu erat
          neque bibendum.
        </Text>
      </Stack>
    </DashboardCard>
  );
};

export default PrivacyCard;
