"use client";

import Image from "next/image";
import { Button, Typography } from "../../common";
import avtImage1 from "@/public/images/avt_1.jpg";
import avtImage2 from "@/public/images/avt_2.jpg";
import avtImage3 from "@/public/images/avt_3.jpg";
import avtImage4 from "@/public/images/avt_5.png";
import start3_5Image from "@/public/images/start-3.5.svg";
import start4Image from "@/public/images/start-4.svg";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/utils";
import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("testimonial");

  const slides = [
    {
      id: 0,
      image: avtImage1,
      name: "Floyd Miles",
      start: start4Image,
      content: t("item-1.review"),
    },
    {
      id: 1,
      image: avtImage2,
      name: "Ronald Richards",
      start: start4Image,
      content: t("item-2.review"),
    },
    {
      id: 2,
      image: avtImage3,
      name: "Savannah Nguyen",
      start: start3_5Image,
      content: t("item-3.review"),
    },
    {
      id: 3,
      image: avtImage4,
      name: "Peter Tran",
      start: start4Image,
      content: t("item-4.review"),
    },
    {
      id: 4,
      image: avtImage1,
      name: "Floyd Miles",
      start: start4Image,
      content: t("item-5.review"),
    },
    {
      id: 5,
      image: avtImage2,
      name: "Ronald Richards",
      start: start4Image,
      content: t("item-6.review"),
    },
    {
      id: 6,
      image: avtImage3,
      name: "Savannah Nguyen",
      start: start3_5Image,
      content: t("item-7.review"),
    },
    {
      id: 7,
      image: avtImage4,
      name: "Peter Tran",
      start: start4Image,
      content: t("item-8.review"),
    },
  ];

  const slideRef = useRef<HTMLDivElement>(null);
  const [currentActive, setCurrentActive] = useState(0);
  const [isPreventHandleScroll, setIsPreventHandleScroll] = useState(false);
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(2);
    }
  }, []);

  const handleClick = (index: number) => {
    setIsPreventHandleScroll(true);
    setCurrentActive(index);
    slideRef.current?.scrollTo({
      left: slideRef.current.clientWidth * index,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsPreventHandleScroll(false);
    }, 500);
  };

  const handleScroll = () => {
    if (slideRef.current === null || isPreventHandleScroll) return;

    const index = Math.round(
      slideRef.current?.scrollLeft / slideRef.current?.clientWidth
    );

    setCurrentActive(index);
  };

  return (
    <section
      className="p-container py-14 xl:pt-[80px] xl:pb-[90px] bg-[url('/images/bg-testimonial.png')]"
      data-aos="fade-down">
      <Typography
        component="h2"
        className="max-w-[446px] mx-auto text-center mb-6 md:mb-[60px]">
        {t("title")}
      </Typography>
      <div
        className="transition-transform duration-500 ease-in-out mb-8 md:mb-14 grid overflow-x-auto grid-flow-col auto-cols-[calc(100%/2)] lg:auto-cols-[calc(100%/3)] snap-x snap-mandatory scrollbar-hide"
        ref={slideRef}
        onScroll={handleScroll}>
        {slides.map(({ id, image, start, name, content }) => (
          <div key={id} className="snap-start px-1 md:px-3">
            <div className="rounded-[20px] border border-green-white bg-white p-3 sm:p-6 h-full">
              <div className="flex sm:items-center sm:flex-row justify-between flex-col items-start gap-y-2">
                <Image
                  src={image}
                  alt="avt"
                  className="w-[60px] h-[60px] object-cover"
                />
                <Image src={start} alt="start" />
              </div>
              <Typography
                component="h5"
                className="my-1 sm:my-3 text-base sm:text-[22px]">
                {name}
              </Typography>
              <Typography className="line-clamp-2 md:line-clamp-3 lg:line-clamp-5 text-sm sm:text-base">
                {content}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1.5">
        {Array.from({ length: Math.ceil(slides.length / slidesPerPage) }).map(
          (_, index) => (
            <Button
              key={index}
              onClick={() => handleClick(index)}
              className={cn("w-3 h-3 p-0 rounded-full bg-primary/30", {
                "bg-primary": index === currentActive,
              })}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Testimonial;
