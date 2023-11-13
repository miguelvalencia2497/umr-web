import Link from "next/link";
import { TFunction } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../../i18n/settings";
import { useTranslation } from "../../../../i18n";

type Props = { t: TFunction; lng: string };

export const LanguageSwitcherBase: React.FunctionComponent<Props> = async ({
  t,
  lng,
}) => {
  return (
    <div>
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-ignore */}
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </div>
  );
};
