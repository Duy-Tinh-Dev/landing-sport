import { Accordion } from "@/app/components/common";
import { useTranslations } from "next-intl";

const FAQS = () => {
  const t = useTranslations("faqs");

  const listFaqs = {
    left: [
      {
        key: 0,
        title: t("faqs.question-1.title"),
        content: t("faqs.question-1.answer"),
      },
      {
        key: 1,
        title: "How to book spesific doctor’s consultan,",
        content: "Content for item 2",
      },
      {
        key: 2,
        title: "Can I request a refund?",
        content: "Content for item 3",
      },
      {
        key: 3,
        title: "How to get prescriptions for drugs from pharmacies",
        content: "Content for item 4",
      },
      {
        key: 4,
        title: "How to book spesific doctor’s consultan,",
        content: "Content for item 5",
      },
    ],
    right: [
      {
        key: 5,
        title: "How to make an appointment",
        content:
          "Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks. Free version contains a limited amount of pre-designed blocks. Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks. Free version contains a limited amount of pre-designed blocks.",
      },
      {
        key: 6,
        title: "Can I request a refund?",
        content: "Content for item 3",
      },
      {
        key: 7,
        title: "How to get prescriptions for drugs from pharmacies",
        content: "Content for item 4",
      },
      {
        key: 8,
        title: "How to book spesific doctor’s consultan,",
        content: "Content for item 5",
      },
    ],
  };

  return (
    <section
      className="p-container pt-[50px] pb-14 md:pb-[100px] bg-[url('/images/bg-hero.png')] bg-no-repeat"
      data-aos="fade-down">
      <h1 className="text-tuna -green font-bold text-[45px] relative mb-6 md:mb-10 text-center">
        {t('title')}
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-6 lg:pr-10 xl:pr-[60px]">
          <Accordion
            className="md:last:border-none"
            listAccordions={listFaqs.right}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-6 lg:pl-10 xl:pl-[60px]">
          <Accordion
            className="last:border-none"
            listAccordions={listFaqs.left}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQS;
