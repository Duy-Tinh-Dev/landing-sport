"use client";

import {
  AppDownload,
  Feature,
  Hero,
  OurServe,
  Plans,
  Support,
} from "@/app/components/modules";
import phoneScreen1Image from "@/public/images/phone-screen-1.png";
import phoneScreen2Image from "@/public/images/phone-screen-2.png";
import phoneScreen3Image from "@/public/images/phone-screen-3.png";
import phoneScreen4Image from "@/public/images/phone-screen-4.png";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("feature");

  return (
    <>
      <Hero />
      <Support />
      <OurServe />
      <Feature
        image={phoneScreen1Image}
        subTitle={t("item-1.sub-title")}
        title={t("item-1.title")}
        description={t("item-1.description")}
        contentButton={t("item-1.button-text")}
      />
      <Feature
        image={phoneScreen2Image}
        subTitle={t("item-2.sub-title")}
        title={t("item-2.title")}
        description={t("item-2.description")}
        contentButton={t("item-2.button-text")}
        isReverse
      />
      <Feature
        image={phoneScreen3Image}
        subTitle={t("item-3.sub-title")}
        title={t("item-3.title")}
        description={t("item-3.description")}
        contentButton={t("item-3.button-text")}
      />
      <Feature
        image={phoneScreen4Image}
        subTitle={t("item-4.sub-title")}
        title={t("item-4.title")}
        description={t("item-4.description")}
        isReverse
      />
      <Plans />
      <AppDownload className="py-16" />
    </>
  );
}
