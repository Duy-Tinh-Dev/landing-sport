import Link from "next/link";
import { Button, Logo } from "../../common";
import Drawer from "./Drawer";
import Navigation from "./navigation";
import { useTranslations, useLocale } from "next-intl";
import { useTransition } from "react";
import { Locale } from "@/app/config";
import { getUserLocale, setUserLocale } from "@/app/services/locale";
import { useRouter } from "next/router";
import { cn } from "@/app/utils";

export interface ListNavigation {
  key: number;
  title: string;
  link: string;
}

const Header = () => {
  const t = useTranslations("lang");
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <header
      className={cn(
        "flex items-center justify-between py-[30px] animate-fadeIn p-container bg-[url('/images/bg-hero.png')] bg-no-repeat",
        {
          "select-none": isPending,
        }
      )}>
      <div className="flex items-center gap-x-4 justify-between sm:justify-start w-full sm:w-auto">
        <Logo />
      </div>
      <div className="items-center flex">
        <Button
          onClick={() => onChange("vi")}
          className={cn(
            "rounded-tr-none rounded-br-none bg-slate-200 text-neutral-400 flex items-center px-2.5 py-2 w-auto",
            {
              "bg-primary text-white": locale === "vi",
            }
          )}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            fill="none">
            <g clipPath="url(#clip0_4_7329)">
              <path
                d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                fill="#D80027"
              />
              <path
                d="M256 133.565L283.628 218.594H373.033L300.702 271.144L328.33 356.174L256 303.623L183.67 356.174L211.298 271.144L138.968 218.594H228.372L256 133.565Z"
                fill="#FFDA44"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_7329">
                <rect width="512" height="512" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="ml-1 uppercase">{t("vi")}</span>
        </Button>
        <Button
          onClick={() => onChange("en")}
          className={cn(
            "rounded-tl-none rounded-bl-none bg-slate-200 text-neutral-400 flex items-center px-2.5 py-2 w-auto",
            {
              "bg-primary text-white": locale === "en",
            }
          )}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
            fill="none">
            <g clipPath="url(#clip0_4_7321)">
              <path
                d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                fill="#F0F0F0"
              />
              <path
                d="M52.92 100.142C32.811 126.305 17.648 156.46 8.81897 189.219H141.997L52.92 100.142Z"
                fill="#0052B4"
              />
              <path
                d="M503.181 189.219C494.352 156.461 479.188 126.306 459.08 100.143L370.005 189.219H503.181Z"
                fill="#0052B4"
              />
              <path
                d="M8.81897 322.784C17.649 355.542 32.812 385.697 52.92 411.859L141.994 322.784H8.81897Z"
                fill="#0052B4"
              />
              <path
                d="M411.858 52.9211C385.695 32.8121 355.541 17.6491 322.782 8.81909V141.996L411.858 52.9211Z"
                fill="#0052B4"
              />
              <path
                d="M100.142 459.079C126.305 479.188 156.46 494.351 189.218 503.181V370.005L100.142 459.079Z"
                fill="#0052B4"
              />
              <path
                d="M189.217 8.81909C156.459 17.6491 126.304 32.8121 100.142 52.9201L189.217 141.995V8.81909Z"
                fill="#0052B4"
              />
              <path
                d="M322.783 503.181C355.541 494.351 385.696 479.188 411.858 459.08L322.783 370.005V503.181Z"
                fill="#0052B4"
              />
              <path
                d="M370.005 322.784L459.08 411.86C479.188 385.698 494.352 355.542 503.181 322.784H370.005Z"
                fill="#0052B4"
              />
              <path
                d="M509.833 222.609H289.393H289.392V2.167C278.461 0.744 267.317 0 256 0C244.681 0 233.539 0.744 222.609 2.167V222.607V222.608H2.167C0.744 233.539 0 244.683 0 256C0 267.319 0.744 278.461 2.167 289.391H222.607H222.608V509.833C233.539 511.256 244.681 512 256 512C267.317 512 278.461 511.257 289.391 509.833V289.393V289.392H509.833C511.256 278.461 512 267.319 512 256C512 244.683 511.256 233.539 509.833 222.609Z"
                fill="#D80027"
              />
              <path
                d="M322.783 322.784L437.019 437.02C442.273 431.768 447.285 426.277 452.067 420.585L354.265 322.783H322.783V322.784Z"
                fill="#D80027"
              />
              <path
                d="M189.217 322.784H189.215L74.98 437.019C80.232 442.273 85.723 447.285 91.415 452.067L189.217 354.263V322.784Z"
                fill="#D80027"
              />
              <path
                d="M189.217 189.219V189.217L74.981 74.98C69.727 80.232 64.715 85.723 59.933 91.415L157.736 189.218H189.217V189.219Z"
                fill="#D80027"
              />
              <path
                d="M322.783 189.219L437.02 74.9811C431.768 69.7271 426.277 64.7151 420.585 59.9341L322.783 157.737V189.219Z"
                fill="#D80027"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_7321">
                <rect width="512" height="512" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="ml-1 uppercase">{t("en")}</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
