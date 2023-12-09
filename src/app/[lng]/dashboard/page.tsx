"use client";
import ContentWrapper from "@/app/components/common/ContentWrapper";
import Navbar from "@/app/components/common/Navbar";
import NoticePanel from "@/app/components/common/NoticePanel";
import noticeBg from "../../../../public/notice-bg-hand.png";
import useScreen from "@/app/hooks/useScreen";
import { fullName, sentenceize } from "@/app/utils/string";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "@/app/i18n/client";
import ConsultationCard from "./cards/ConsultationCard";
import QRCard from "./cards/QRCard";
import FollowUpCard from "./cards/FollowUpCard";
import DependentsCard from "./cards/DependentsCard";
import PaymentsCard from "./cards/PaymentsCard";
import MedicationCard from "./cards/MedicationCard";
import FAQCard from "./cards/FAQCard";
import PrivacyCard from "./cards/PrivacyCard";

type DashboardProps = {
  params: { lng: string };
};

const Dashboard: React.FC<DashboardProps> = ({ params: { lng } }) => {
  const { isMobile, isTablet, isDesktop } = useScreen();
  const { t } = useTranslation(lng);
  const user = {
    first_name: "Juan",
    last_name: "Dela Cruz",
  };
  return (
    <>
      <Navbar lng={lng} />
      <ContentWrapper>
        <NoticePanel
          title={sentenceize(t("im_a_reminder"))}
          subtitle={
            "More description to this reminder 2 lines truncated more info"
          }
          boxProps={{
            style: {
              backgroundImage: `url(${noticeBg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPositionX: isMobile || isTablet ? "right" : "center",
              backgroundPositionY: "bottom",
            },
          }}
          onButtonClick={() => {
            console.log("asd");
          }}
        />
        <VStack mt="8" alignItems="flex-start" gap="0">
          <Text fontSize="12px" color="primary.700">
            {sentenceize(t("welcome_back"))}!
          </Text>
          <Heading as="h1" size="xl" fontWeight="900" color="primary.700">
            {fullName({
              first_name: user.first_name,
              last_name: user.last_name,
            })}
          </Heading>
        </VStack>
        {isDesktop ? (
          <HStack mt="24px" gap="3" alignItems="flex-start" h="600px">
            <VStack w="full" height="full" justify="center">
              <ConsultationCard lng={lng} boxProps={{ flex: 8 }} />
              <QRCard lng={lng} boxProps={{ flex: 2 }} />
              <PrivacyCard lng={lng} boxProps={{ flex: 2 }} />
            </VStack>
            <VStack w="full" height="full" justify="center">
              <FollowUpCard lng={lng} boxProps={{ flex: 8 }} />
              <DependentsCard lng={lng} boxProps={{ flex: 2 }} />
              <PaymentsCard lng={lng} boxProps={{ flex: 2 }} />
            </VStack>
            <VStack w="full" height="full" justify="center">
              <MedicationCard lng={lng} boxProps={{ flex: 1 }} />
              <FAQCard lng={lng} boxProps={{ flex: 1 }} />
            </VStack>
          </HStack>
        ) : (
          <>
            <Box
              w="100%"
              h="320px"
              mt="5"
              style={{ whiteSpace: "nowrap" }}
              overflowY="scroll"
            >
              <ConsultationCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                  marginRight: "4",
                }}
              />
              <FollowUpCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                  marginRight: "4",
                }}
              />
              <MedicationCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                  marginRight: "4",
                }}
              />
              <FAQCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                }}
              />
            </Box>
            <Box
              w="100%"
              h="140px"
              mt="5"
              style={{ whiteSpace: "nowrap" }}
              overflowY="scroll"
            >
              <QRCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                  marginRight: "4",
                }}
              />
              <DependentsCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                  marginRight: "4",
                }}
              />
              <PrivacyCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                  marginRight: "4",
                }}
              />
              <PaymentsCard
                lng={lng}
                boxProps={{
                  display: "inline-block",
                  width: "90%",
                  height: "100%",
                  whiteSpace: "normal",
                }}
              />
            </Box>
          </>
        )}
      </ContentWrapper>
    </>
  );
};

export default Dashboard;
