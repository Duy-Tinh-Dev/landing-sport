import supportImage from "@/public/images/support.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

const IllustrationImage = () => {
  const t = useTranslations("support");

  return (
    <div className="w-full lg:w-[60%] lg:pl-5 xl:pl-[60px] pt-32 lg:pt-8  flex justify-center lg:block">
      <div className="relative max-w-[600px] lg:max-w-none">
        <div className="absolute top-[-125px] left-0 text-center">
          <span className="text-center text-lg font-semibold inline-block translate-y-[52px]">
            {t("support-message-1")}
          </span>
          <span className="shadow-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="307"
              height="95"
              viewBox="0 0 307 95"
              fill="none">
              <path
                d="M0 15C0 6.71573 6.71573 0 15 0H292C300.284 0 307 6.71573 307 15V62C307 70.2843 300.284 77 292 77H168L173.361 93.4951C173.676 94.4649 172.508 95.229 171.745 94.5516L152 77H15C6.71573 77 0 70.2843 0 62V15Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div className="absolute -top-[14%] xl:top-[-80px] right-[7%] text-center hidden sm:block">
          <span className="text-center text-lg font-semibold translate-y-[50px]inline-block">
            {t("support-message-2")}
          </span>
          <span className="shadow-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="187"
              height="98"
              viewBox="0 0 187 98"
              fill="none">
              <path
                d="M0 15C0 6.71573 6.71573 0 15 0H172C180.284 0 187 6.71573 187 15V62C187 70.2843 180.284 77 172 77H102.332L79 98L92.5863 77H15C6.71571 77 0 70.2843 0 62V15Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <Image
          className="w-full max-h-[580px] object-top object-cover"
          src={supportImage}
          alt="support"
        />
      </div>
    </div>
  );
};

export default IllustrationImage;
