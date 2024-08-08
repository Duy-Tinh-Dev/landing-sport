import Link from "next/link";
import { Typography } from "../../common";
import Image from "next/image";
import appStoreImage from "@/public/images/apple-download.svg";
import googlePlayImage from "@/public/images/google-download.svg";
import avt1Image from "@/public/images/avt_1.jpg";
import avt2Image from "@/public/images/avt_2.jpg";
import avt3Image from "@/public/images/avt_3.jpg";
import start4Image from "@/public/images/stars-4.svg";
import heroImage from "@/public/images/hero.png";
import truckImage from "@/public/images/truck.svg";
import sportImage from "@/public/images/sport.svg";
import arrowCurveImage from "@/public/images/arrow_curve.png";
import certification from "@/public/images/certification.png";
import { useTranslations } from "next-intl";
import { LINK_DOWNLOAD } from "@/app/utils";

const Hero = () => {
  const t = useTranslations();

  return (
    <section className="bg-[url('/images/bg-hero.png')] bg-no-repeat">
      <div className="p-container pb-8">
        <div className="flex items-center" data-aos="fade-down">
          <div className="md:max-w-1/2 lg:max-w-[45%] flex flex-col gap-[30px] mt-6 sm:mt-10 lg:mt-10 xl:mt-20 text-center md:text-start">
            <Typography component="h1">
              {t("hero.title")}
              <span className="text-shamrockGreen ml-1">
                {" "}
                {t("common.name")}
              </span>
              <span className="text-primary ml-1 capitalize">
                {" "}
                {t("common.merchant")}
              </span>
            </Typography>
            <Typography className="text-lg text-secondary">
              {t("hero.sub-title")}
            </Typography>
            <div className="flex items-center gap-5 xl:mb-[55px] justify-center md:justify-start">
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
            <div className="flex items-center justify-center md:justify-start flex-wrap gap-y-2">
              <div className="flex -space-x-2 overflow-hidden mr-5 w-full xl:w-auto justify-center md:justify-start">
                <Image
                  width={60}
                  height={60}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={avt1Image}
                  alt="avt"
                />
                <Image
                  width={60}
                  height={60}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={avt2Image}
                  alt="avt"
                />
                <Image
                  width={60}
                  height={60}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src={avt3Image}
                  alt="avt"
                />
              </div>
              <div>
                <Typography className="text-dark-jungle-green text-lg xl:text-[30px] font-bold mb-1">
                  2,291
                </Typography>
                <Typography>{t("common.customer-review")}</Typography>
              </div>
              <div className="h-10 w-0.5 bg-dark-jungle-green mx-4 lg:mx-[26px]" />
              <div>
                <Typography className="text-dark-jungle-green text-lg xl:text-[30px] font-bold mb-1">
                  4.8/5
                </Typography>
                <div className="flex items-center gap-2.5">
                  <Image src={start4Image} alt="start" />
                  <Typography>{t("common.review")}</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-4 hidden md:block">
            <div className="absolute w-[73px] h-[73px] rounded-full bg-primary items-center justify-center rotate-[-20deg] top-[40%] left-[25%] hidden lg:flex">
              <Image src={truckImage} alt="truck" className="rotate-[20deg]" />
            </div>
            <div className="absolute top-0 right-[5%] items-center space-x-[18px] px-7 py-3 shadow-xl rounded-2xl bg-white hidden lg:flex">
              <Image
                src={sportImage}
                alt="pizza"
                className="w-[45px] h-[45px] rounded-full"
              />
              <div className="space-y-1.5">
                <Typography className="text-grey-goose text-xs">
                  {t("common.review")}
                </Typography>
                <Typography className="text-sm font-bold">160K+</Typography>
              </div>
            </div>
            <div className="absolute top-[10%] right-[10%]">
              <Image src={arrowCurveImage} alt="arrow_curve" />
            </div>
            <div className="absolute -top-4 left-[10%]">
              <Image src={certification} alt="arrow_curve" />
            </div>
            <Image src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
