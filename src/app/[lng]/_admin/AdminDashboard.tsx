"use client";
import AdminWrapper from "./AdminWrapper";
import NoticePanel from "@/app/components/common/NoticePanel";
import noticeBg from "../../../../public/notice-bg-admin.png";
import { capitalize, fullName, sentenceize } from "@/app/utils/string";
import { useTranslation } from "@/app/i18n/client";
import useScreen from "@/app/hooks/useScreen";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useUser } from "@/app/contexts/UserContext";
import Panel from "@/app/components/common/Panel/Panel";
import Image from "next/image";
import DividerDashed from "@/app/components/common/Divider/DividerDashed";
import PatientTable from "../patients/tables/PatientTable";

type Props = {
  lng: string;
};

const AdminDashboard: React.FC<Props> = ({ lng, ...props }) => {
  const { t } = useTranslation(lng, "dashboard");
  const { isMobile, isTablet } = useScreen();
  const user = useUser();

  const onSearch = (val: string) => {};

  return (
    <AdminWrapper lng={lng}>
      <VStack mt="8" alignItems="flex-start" gap="0">
        <Text fontSize="12px" color="primary.700">
          {sentenceize(t("welcome_back"))}!
        </Text>
        <Heading as="h2" size="lg" fontWeight="900" color="primary.700">
          {fullName({
            first_name: user?.first_name,
            last_name: user?.last_name,
          })}
        </Heading>
      </VStack>
      <NoticePanel
        title={sentenceize(t("im_a_reminder"))}
        subtitle={
          "More description to this reminder 2 lines truncated more info"
        }
        boxProps={{
          mt: "8px",
          background: "#5BC4D0",
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
      <Panel mt="24px">
        <VStack w="full">
          <HStack justify={"space-between"} w="full">
            <Heading
              as="h4"
              fontSize="13px"
              fontWeight={700}
              color="primary.700"
            >
              {capitalize(t("patient_queue"))}
            </Heading>
            <Button onClick={() => {}}>
              <Text fontWeight={700} fontSize="13px">
                {capitalize(t("add_patient"))}
              </Text>
            </Button>
          </HStack>
          <InputGroup width="full" mt="16px">
            <InputLeftElement>
              <Image
                alt="search"
                src="/icon-search.svg"
                width="20"
                height="20"
              />
            </InputLeftElement>
            <Input
              type="text"
              placeholder={capitalize(t("search_patient"))}
              onChange={(e) => {
                let value = e?.target?.value;
                onSearch(value);
              }}
            />
          </InputGroup>
          <DividerDashed />
          <PatientTable lng={lng} />
        </VStack>
      </Panel>
    </AdminWrapper>
  );
};

export default AdminDashboard;
