import Image, { ImageProps, StaticImageData } from "next/image";
import { Button, Typography } from "../../common";
import { cn } from "@/app/utils";

interface FeatureProps {
  image: StaticImageData;
  subTitle: string;
  title: string;
  description: string;
  contentButton?: string;
  isReverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  image,
  subTitle,
  title,
  description,
  contentButton,
  isReverse,
}) => {
  return (
    <section
      className={cn(
        "px-6 xl:px-[80px] flex bg-desert-storm flex-wrap justify-center overflow-x-hidden",
        {
          "bg-white": isReverse,
        }
      )}>
      <div
        className={cn("w-full lg:w-[55%] flex justify-center", {
          "lg:order-1": isReverse,
        })}
        data-aos="fade-right">
        <Image
          className="xl:min-h-[640px] lg:object-contain"
          src={image}
          alt="image"
        />
      </div>
      <div
        className="w-full lg:w-[45%] mt-10 lg:mt-[188px] max-w-[600px] pb-12 lg:pb-8 text-center lg:text-start"
        data-aos="fade-left">
        <Typography
          component="h5"
          className="text-sm font-normal text-jasper mb-3">
          {subTitle}
        </Typography>
        <Typography component="h2" className="mb-3">
          {title}
        </Typography>
        <Typography className="mb-5 lg:mb-8">{description}</Typography>
        {contentButton && <Button isPrimary>{contentButton}</Button>}
      </div>
    </section>
  );
};

export default Feature;
