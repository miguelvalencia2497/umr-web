"use client";
import ContentWrapper from "@/app/components/common/ContentWrapper";
import Navbar from "@/app/components/common/Navbar";
import NoticePanel from "@/app/components/common/NoticePanel";
import noticeBg from "../../../../public/notice-bg-hand.png";
import useScreen from "@/app/hooks/useScreen";
import { useTranslation } from "react-i18next";
import { fullName, sentenceize, titleize } from "@/app/utils/string";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import DashboardCard from "@/app/components/dashboard/DashboardCard";
import Link from "next/link";
import { capitalize } from "lodash";
import { MdAdd, MdChevronRight } from "react-icons/md";

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
        <HStack mt="24px" gap="3" alignItems="flex-start">
          <VStack w="full" gap="5">
            <DashboardCard
              boxProps={{
                background: "white.700",
                border: "1px solid #D7E5E5",
              }}
              childrenWrapperProps={{
                flexDirection: "column",
                gap: "5",
                alignItems: "flex-start",
              }}
              onButtonClick={() => {}}
              buttonIcon={<MdAdd />}
              //?? For enabling dismissable
              // boxProps={{ background: "primary.900", color: "white.300" }}
              // isDismissable={true}
            >
              <Stack spacing="4">
                <Text fontSize="13px" fontWeight="700">
                  {capitalize(t("review_your_last_consultation"))}
                </Text>
                <Box>
                  <Text fontSize="12px" fontWeight="400">
                    {capitalize(t("date_of_visit"))}
                  </Text>
                  <Text fontSize="12px" fontWeight="500">
                    Aug 20, 2023
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" fontWeight="400">
                    {capitalize(t("attending_physician"))}
                  </Text>
                  <Text fontSize="12px" fontWeight="500">
                    Dr Juan Eugonio
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" fontWeight="400">
                    {capitalize(t("diagnosis"))}
                  </Text>
                  <Text fontSize="12px" fontWeight="500">
                    Sed vehicula urna mattis faucibus eu erat neque bibendum.
                    Sed vehicula urna mattis faucibus eu erat neque bibendum.Sed
                    vehicula urna mattis faucibus eu erat neque bibendum.
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="12px" fontWeight="400">
                    {capitalize(t("disposition"))}
                  </Text>
                  <Text fontSize="12px" fontWeight="500">
                    Recovered
                  </Text>
                </Box>
                <Box>
                  <Link href="#">
                    <Text
                      fontSize="12px"
                      fontWeight="700"
                      textDecoration="underline"
                    >
                      {capitalize(t("view_full_consultation_details"))}
                    </Text>
                  </Link>
                </Box>
              </Stack>
            </DashboardCard>
            <DashboardCard
              onButtonClick={() => {
                console.log("button clicked");
              }}
            >
              <Stack spacing="4">
                <Text fontSize="13px" fontWeight="700">
                  {t("generate_your_qr_code")}
                </Text>
                <Text fontSize="12px" fontWeight="400" mb="5">
                  Use this QR code for Sed vehicula urna mattis faucibus eu erat
                  neque bibendum.
                </Text>
              </Stack>
            </DashboardCard>
          </VStack>
          <VStack w="full" gap="5">
            <DashboardCard
              childrenWrapperProps={{
                flexDirection: "column",
                gap: "2",
                alignItems: "flex-start",
              }}
              onButtonClick={() => {
                console.log("button clicked");
              }}
              buttonIcon={<MdAdd />}
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
            <DashboardCard
              onButtonClick={() => {}}
              boxProps={{
                background: "white.700",
                border: "1px solid #D7E5E5",
              }}
            >
              <Stack spacing="4">
                <Text fontSize="13px" fontWeight="700">
                  {titleize(t("hmo_and_dependents"))}
                </Text>
                <Text fontSize="12px" fontWeight="400">
                  Add your HMO account or add dependents here, Dictum quis
                  condimentum dictum maecenas.
                </Text>
              </Stack>
            </DashboardCard>
            <DashboardCard onButtonClick={() => {}}>
              <Stack spacing="4">
                <Text fontSize="13px" fontWeight="700">
                  {titleize(t("payment_methods"))}
                </Text>
                <Text fontSize="12px" fontWeight="400">
                  Link your GCash, Debit or Credit card or Bank account here sed
                  vehicula urna mattis faucibus eu erat neque bibendum.
                </Text>
              </Stack>
            </DashboardCard>
          </VStack>
          <VStack w="full" gap="5">
            <DashboardCard
              childrenWrapperProps={{
                flexDirection: "column",
                gap: "10",
                alignItems: "flex-start",
              }}
              onButtonClick={() => {
                console.log("button clicked");
              }}
              buttonIcon={<MdAdd />}
              boxProps={{
                background: "white.700",
                border: "1px solid #D7E5E5",
              }}
            >
              <Stack spacing="4">
                <Text fontSize="13px" fontWeight="700" mb="2">
                  {titleize(t("review_current_medication_list"))}
                </Text>
                <Box>
                  <Text fontSize="12px" fontWeight="400">
                    {capitalize(t("prescribed_date"))}
                  </Text>
                  <Text fontSize="12px" fontWeight="500">
                    Aug 20, 2023
                  </Text>
                </Box>
                <Box mb="5">
                  <Text fontSize="12px" fontWeight="400">
                    {capitalize(t("medication"))}
                  </Text>
                  <Text fontSize="12px" fontWeight="500">
                    FeS04 tab #30, Sig: A.D.
                  </Text>
                  <Text fontSize="12px" fontWeight="500">
                    Ascorbic acid #30, 500mg tab, Sig: Once a day
                  </Text>
                </Box>
              </Stack>
            </DashboardCard>
            <DashboardCard
              childrenWrapperProps={{
                flexDirection: "column",
                gap: "7",
                alignItems: "flex-start",
              }}
              onButtonClick={() => {
                console.log("button clicked");
              }}
            >
              <Stack spacing="4">
                <Text fontSize="13px" fontWeight="700" mb="2">
                  {t("frequently_asked_questions")}
                </Text>
                <HStack gap="4">
                  <Text fontSize="12px" fontWeight="400">
                    Dictum quis condimentum dictum maecenas.Dictum quis
                    condimentum dictum maecenas.
                  </Text>
                  <Link href="#">
                    <Text fontSize="20px" color="primary.600">
                      <MdChevronRight />
                    </Text>
                  </Link>
                </HStack>
                <Divider />
                <HStack gap="4">
                  <Text fontSize="12px" fontWeight="400">
                    Dictum quis condimentum dictum maecenas.Dictum quis
                    condimentum dictum maecenas.
                  </Text>
                  <Link href="#">
                    <Text fontSize="20px" color="primary.600">
                      <MdChevronRight />
                    </Text>
                  </Link>
                </HStack>
              </Stack>
            </DashboardCard>
          </VStack>
        </HStack>
      </ContentWrapper>
    </>
  );
};

export default Dashboard;
