import { cn } from "@/app/utils";
import { useState } from "react";

interface AccordionProps {
  listAccordions: {
    key: number;
    title: string;
    content: string;
  }[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ listAccordions, className }) => {
  const [faqsActive, setFaqsActive] = useState<Array<number>>([]);

  const handleToggle = (key: number) => {
    setFaqsActive((prev) => {
      if (prev.includes(key)) {
        return prev.filter((item) => item !== key);
      }

      return [...prev, key];
    });
  };

  return (
    <>
      {listAccordions.map((item) => {
        const isActive = faqsActive.includes(item.key);

        return (
          <div
            key={item.key}
            className={cn("border-b border-black/50", className)}>
            <button
              onClick={() => handleToggle(item.key)}
              className="text-start flex justify-between items-center w-full py-6 gap-4 px-2 sm:px-0">
              <span className="transition-all text-lg text-azure font-bold">
                {item.title}
              </span>
              <span>
                {isActive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="3"
                    viewBox="0 0 16 3"
                    fill="none">
                    <path
                      d="M1.67285 1.19287H14.3311"
                      stroke="#0093FF"
                      stroke-width="1.69884"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none">
                    <path
                      d="M7.67224 1.43262V13.3245"
                      stroke="#303A42"
                      stroke-width="1.69884"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.34338 7.37891H14.0016"
                      stroke="#303A42"
                      stroke-width="1.69884"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </span>
            </button>
            <div
              className={cn("grid transition-all", {
                "grid-rows-[1fr]": isActive,
                "grid-rows-[0fr]": !isActive,
              })}>
              <div className="overflow-hidden">
                <p className="pb-6 text-tuna">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
