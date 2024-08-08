import Image from "next/image";
import orderImage from "@/public/images/order.png";
import notifyImage from "@/public/images/notify.png";
import revenue from "@/public/images/revenue.png";
import manager from "@/public/images/manager.png";
import { Typography } from "../../common";
import { useTranslations } from "next-intl";

const OurServe = () => {
  const t = useTranslations("our-services");

  const listServe = [
    {
      key: 0,
      name: t("item-1.title"),
      description: t("item-1.description"),
      image: orderImage,
    },
    {
      key: 1,
      name: t("item-2.title"),
      description: t("item-2.description"),
      image: revenue,
    },
    {
      key: 2,
      name: t("item-3.title"),
      description: t("item-3.description"),
      image: manager,
    },
    {
      key: 3,
      name: t("item-4.title"),
      description: t("item-4.description"),
      image: notifyImage,
    },
  ];

  return (
    <section
      className="p-container pb-14 md:pb-[100px] text-center"
      data-aos="fade-down">
      <Typography component="h2" className="mb-[50px]">
        {t("title")}
      </Typography>
      <div className="flex justify-center md:justify-between lg:px-[120px] flex-wrap md:flex-nowrap gap-y-6">
        {listServe.map(({ key, name, description, image }) => (
          <div key={key} className="w-full sm:w-1/2 md:w-1/3 px-3">
            <div className="flex flex-col items-center">
              <Image
                className="w-[120px] h-[120px] mb-2.5"
                src={image}
                alt={name}
              />
              <Typography component="h5">{name}</Typography>
              <Typography>{description}</Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServe;
