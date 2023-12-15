"use client";
import { useTranslation } from "../i18n/client";

export default function ViewInitializer({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng);

  return (
    <main>
      {/* <>{t("hello")}</> */}
      {/* <LanguageSwitcher lng={lng} /> */}
    </main>
  );
}
