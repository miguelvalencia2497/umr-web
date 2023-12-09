import DashboardCard from "@/app/components/dashboard/DashboardCard";
import { useTranslation } from "@/app/i18n/client";
import { BoxProps, Divider, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

type Props = { lng: string; boxProps?: BoxProps };

const FAQCard: React.FC<Props> = ({ lng, boxProps }) => {
  const { t } = useTranslation(lng);
  return (
    <DashboardCard
      cardImage={
        <Image
          src="/card-faq.png"
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
      onButtonClick={() => {
        console.log("button clicked");
      }}
      boxProps={{ ...boxProps }}
    >
      <Stack spacing="4">
        <Text fontSize="13px" fontWeight="700" mb="2">
          {t("frequently_asked_questions")}
        </Text>
        <HStack gap="4">
          <Text fontSize="12px" fontWeight="400" noOfLines={2}>
            Dictum quis condimentum dictum maecenas.Dictum quis condimentum
            dictum maecenas.
          </Text>
          <Link href="#">
            <Text fontSize="20px" color="primary.600">
              <MdChevronRight />
            </Text>
          </Link>
        </HStack>
        <Divider />
        <HStack gap="4">
          <Text fontSize="12px" fontWeight="400" noOfLines={2}>
            Dictum quis condimentum dictum maecenas.Dictum quis condimentum
            dictum maecenas.
          </Text>
          <Link href="#">
            <Text fontSize="20px" color="primary.600">
              <MdChevronRight />
            </Text>
          </Link>
        </HStack>
      </Stack>
    </DashboardCard>
  );
};

export default FAQCard;
