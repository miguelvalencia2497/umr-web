import { useTranslation } from "../../../../i18n";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher: React.FC<{ lng: string }> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "languageSwitcher");
  return <LanguageSwitcherBase t={t} lng={lng} />;
};
