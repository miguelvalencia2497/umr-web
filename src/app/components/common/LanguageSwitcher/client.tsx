"use client";

import { useTranslation } from "../../../i18n/client";
import { LanguageSwitcherBase } from "./LanguageSwitcherBase";

export const LanguageSwitcher: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "languageSwitcher");
  return <LanguageSwitcherBase t={t} lng={lng} />;
};
