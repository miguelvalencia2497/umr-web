"use client";

import { useEffect } from "react";
import { useTranslation } from "../i18n/client";
import { LanguageSwitcher } from "./components/common/LanguageSwitcher";
import { useRouter } from "next/router";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng);
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  });
  return (
    <main>
      {/* <>{t("hello")}</> */}
      {/* <LanguageSwitcher lng={lng} /> */}
    </main>
  );
}
