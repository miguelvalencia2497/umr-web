"use client";
import { useEffect } from "react";
import { useTranslation } from "../i18n/client";
import { useRouter } from "next/navigation";

export default function ViewInitializer({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng);
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return (
    <main>
      {/* <>{t("hello")}</> */}
      {/* <LanguageSwitcher lng={lng} /> */}
    </main>
  );
}
