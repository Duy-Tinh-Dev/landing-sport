import Image from "next/image";
import { Typography } from "../../common";
import Link from "next/link";
import downloadImage from "@/public/images/app-download.png";
import appStoreImage from "@/public/images/apple-download.svg";
import googlePlayImage from "@/public/images/google-download.svg";
import { useTranslations } from "next-intl";
import { cn, LINK_DOWNLOAD } from "@/app/utils";

interface AppDownloadProps {
  className?: string;
}

const AppDownload: React.FC<AppDownloadProps> = ({ className }) => {
  const t = useTranslations();

  return (
    <section className={cn("p-container", className)} data-aos="fade-down">
      <div className="bg-desert-storm rounded-[20px] px-4 md:pl-10 lg:pl-20 flex justify-center flex-col md:flex-row items-center">
        <div className="max-w-[400px] my-5 md:my-[70px] text-center md:text-start">
          <Typography className="text-jasper">
            {t("app-download.sub-title")}
          </Typography>
          <Typography component="h3" className="mb-2">
            {t("app-download.title-start")}{" "}
            <span className="text-primary">{t("common.name")}</span>{" "}
            <span className="text-rhino">{t("common.merchant")}</span>{" "}
            {t("app-download.title-end")}
          </Typography>
          <Typography className="mb-5">
            {t("app-download.description")}
          </Typography>
          <div className="flex items-center gap-5 lg:mb-[55px] justify-center md:justify-start">
            <Link
              href={LINK_DOWNLOAD.IOS}
              className="hover:opacity-75 transition-opacity">
              <Image src={appStoreImage} alt="app download" />
            </Link>
            <Link
              href={LINK_DOWNLOAD.ANDROID}
              className="hover:opacity-75 transition-opacity">
              <Image src={googlePlayImage} alt="app download" />
            </Link>
          </div>
        </div>
        <div>
          <Image className="h-full" src={downloadImage} alt="download" />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
