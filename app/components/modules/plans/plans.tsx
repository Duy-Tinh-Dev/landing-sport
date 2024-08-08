import { useTranslations } from "next-intl";
import { Button, Typography } from "../../common";
import start3_5Image from "@/public/images/start-3.5.svg";
import start4Image from "@/public/images/start-4.svg";
import Image from "next/image";

const Plans = () => {
  const t = useTranslations("plans");

  const featureCommon = [
    t("feature-common.item-2"),
    t("feature-common.item-3"),
    t("feature-common.item-4"),
    t("feature-common.item-5"),
    t("feature-common.item-6"),
    t("feature-common.item-7"),
  ];

  return (
    <section
      className="bg-[url('/images/bg-plans.png')] bg-no-repeat pb-14 md:py-[80px]"
      data-aos="fade-down">
      <div className="p-container">
        <Typography component="h2" className="mb-12 md:mb-[80px] text-center">
          {t("title")}
        </Typography>
        <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-y-6">
          <div className="w-full lg:w-1/3 flex px-1.5 lg:px-3">
            {/* Plan Basic */}
            <div className="space-y-3 rounded-[20px] border-green-white border p-6 bg-white flex flex-col flex-grow">
              <Image className="mx-auto" src={start3_5Image} alt="start" />
              <h3 className="text-dark-jungle-green font-bold text-[22px]">
                {t("name.basic")}
              </h3>
              <ul className="text-secondary text-start list-disc ml-4 space-y-1 flex-grow">
                <li>
                  {t("feature-common.item-1")} ( {t("one-playground")} )
                </li>
                {featureCommon.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                <li>{t("feature-common.item-10")}</li>
              </ul>
            </div>
          </div>
          {/* Plan Premium */}
          <div className="w-full lg:w-1/3 flex px-1.5 lg:px-3">
            <div className="space-y-3 rounded-[20px] border-green-white border p-6 bg-white flex flex-col flex-grow">
              <Image className="mx-auto" src={start4Image} alt="start" />
              <h3 className="text-dark-jungle-green font-bold text-[22px]">
                {t("name.premium")}
              </h3>
              <ul className="text-secondary text-start list-disc ml-4 space-y-1 flex-grow">
                <li>
                  {t("feature-common.item-1")}( <b>{t("multi-playground")}</b>)
                </li>
                {featureCommon.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                <li>
                  <b>{t("feature-common.item-8")}</b>
                </li>
                <li>{t("feature-common.item-10")}</li>
              </ul>
            </div>
          </div>
          {/* Plan Vip */}
          <div className="w-full lg:w-1/3 flex px-1.5 lg:px-3">
            <div className="space-y-3 rounded-[20px] border-green-white border p-6 bg-white flex flex-col flex-grow">
              <Image className="mx-auto" src={start4Image} alt="start" />
              <h3 className="text-dark-jungle-green font-bold text-[22px]">
                {t("name.vip")}
              </h3>
              <ul className="text-secondary text-start list-disc ml-4 space-y-1 flex-grow">
                <li>
                  {t("feature-common.item-1")} ( {t("multi-playground")} )
                </li>
                {featureCommon.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                <li>{t("feature-common.item-8")}</li>
                <li>
                  <b> {t("feature-common.item-9")}</b>
                </li>
                <li>{t("feature-common.item-10")}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[50px]">
          <Button className="text-white h-[56px] px-10 rounded-[40px] uppercase w-auto bg-primary">
            {t('btn-text')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
