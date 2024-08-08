import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../common";
import { useTranslations } from "next-intl";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Form = () => {
  const t = useTranslations();

  const { handleSubmit, control } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full lg:w-[40%] lg:pr-5 xl:pr-[60px]">
      <h1 className="text-dark-jungle-green font-bold text-[45px] relative mb-10">
        <span>{t("support.heading")}</span>
        <span className="absolute -left-8 -top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="88"
            viewBox="0 0 110 88"
            fill="none">
            <g clipPath="url(#clip0_356_15008)">
              <g filter="url(#filter0_f_356_15008)">
                <ellipse
                  cx="55"
                  cy="44.5"
                  rx="35"
                  ry="30.5"
                  fill="url(#paint0_linear_356_15008)"
                  fill-opacity="0.4"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_356_15008"
                x="1"
                y="-5"
                width="108"
                height="99"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="9.5"
                  result="effect1_foregroundBlur_356_15008"
                />
              </filter>
              <linearGradient
                id="paint0_linear_356_15008"
                x1="55"
                y1="14"
                x2="55"
                y2="75"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FA502F" />
                <stop offset="1" stop-color="#FA502F" />
              </linearGradient>
              <clipPath id="clip0_356_15008">
                <rect
                  width="1600"
                  height="1054"
                  fill="white"
                  transform="translate(-114 -157)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5 md:gap-x-10 md:gap-y-[25px] mb-9">
          <Input
            label={t("common.form.first-name")}
            type="text"
            placeholder={t("common.form.first-name")}
            controlProps={{
              name: "firstName",
              control,
              rules: { required: t("common.validate-empty") },
            }}
            className="bg-black/5"
          />
          <Input
            label={t("common.form.last-name")}
            type="text"
            placeholder={t("common.form.last-name")}
            controlProps={{
              name: "lastName",
              control,
              rules: { required: t("common.validate-empty") },
            }}
            className="bg-black/5"
          />
          <Input
            label={t("common.email")}
            type="text"
            placeholder="Ex JohnDoe214@gmail.com"
            controlProps={{
              name: "email",
              control,
              rules: { required: t("common.validate-empty") },
            }}
            className="bg-black/5"
            wrapClassName="col-span-2"
          />
          <Input
            isArea
            label={t("support.support-message-3")}
            type="text"
            placeholder={t("support.placeholder-message")}
            controlProps={{
              name: "message",
              control,
            }}
            className="bg-black/5"
            wrapClassName="col-span-2"
          />
        </div>
        <Button isPrimary className="rounded-[10px] w-full">
          {t("support.button-send")}
        </Button>
      </form>
    </div>
  );
};

export default Form;
