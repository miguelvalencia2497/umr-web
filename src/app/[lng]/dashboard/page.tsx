"use client";
import ContentWrapper from "@/app/components/common/ContentWrapper";
import Navbar from "@/app/components/common/Navbar";
import NoticePanel from "@/app/components/common/NoticePanel";
import noticeBg from "../../../../public/notice-bg-hand.png";
import useScreen from "@/app/hooks/useScreen";
import { useTranslation } from "react-i18next";
import { fullName, sentenceize } from "@/app/utils/string";
import { Heading, Text, VStack } from "@chakra-ui/react";

type DashboardProps = {
  params: { lng: string };
};

const Dashboard: React.FC<DashboardProps> = ({ params: { lng } }) => {
  const { isMobile, isTablet } = useScreen();
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
          <Text fontSize="12px">{sentenceize(t("welcome_back"))}!</Text>
          <Heading as="h1" size="xl" fontWeight="900" color="primary.700">
            {fullName({
              first_name: user.first_name,
              last_name: user.last_name,
            })}
          </Heading>
        </VStack>
      </ContentWrapper>
    </>
  );
};

export default Dashboard;
