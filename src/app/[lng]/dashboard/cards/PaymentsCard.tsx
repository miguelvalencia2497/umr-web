import DashboardCard from "@/app/components/dashboard/DashboardCard";
import { useTranslation } from "@/app/i18n/client";
import { titleize } from "@/app/utils/string";
import { Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = { lng: string };

const PaymentsCard: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      cardImage={
        <Image
          src="/card-payment.png"
          alt="qr"
          width={45}
          height={45}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      }
      onButtonClick={() => {}}
    >
      <Stack spacing="4">
        <Text fontSize="13px" fontWeight="700">
          {titleize(t("payment_methods"))}
        </Text>
        <Text fontSize="12px" fontWeight="400" noOfLines={2}>
          Link your GCash, Debit or Credit card or Bank account here sed
          vehicula urna mattis faucibus eu erat neque bibendum.
        </Text>
      </Stack>
    </DashboardCard>
  );
};

export default PaymentsCard;
