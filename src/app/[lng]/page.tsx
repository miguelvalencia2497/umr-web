import { useTranslation } from "../i18n";
import { LanguageSwitcher } from "./components/common/LanguageSwitcher";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  console.log("🚀 ~ file: page.tsx:9 ~ lng:", lng);
  const { t } = await useTranslation(lng);
  return (
    <main>
      <>{t("hello")}</>
      <LanguageSwitcher lng={lng} />
    </main>
  );
}
