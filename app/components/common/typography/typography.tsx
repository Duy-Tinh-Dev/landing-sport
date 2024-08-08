import { cn } from "@/app/utils";
import React from "react";

interface TypographyProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5";
  isPrimary?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  component,
  isPrimary,
  className,
  children,
}) => {
  const getComponentTag = (component: TypographyProps["component"]) => {
    switch (component) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      default:
        return "p";
    }
  };

  const getStyleTag = (variant: TypographyProps["component"]) => {
    switch (variant) {
      case "h1":
        return "text-4xl lg:text-[50px] lg:leading-[65px]";
      case "h2":
        return "text-3xl md:text-[45px] md:leading-[56px]";
      case "h3":
        return "text-3xl md:text-[36px] md:leading-[50px]";
      case "h4":
        return "text-2xl md:text-[26px] leading-[32px]";
      case "h5":
        return "text-[22px] leading-[32px]";
      default:
        return "text-base";
    }
  };

  const Tag = getComponentTag(component);

  return (
    <Tag
      className={cn(
        getStyleTag(component),
        {
          "text-primary": isPrimary,
          "text-secondary": !isPrimary,
          "font-bold": component,
        },
        className
      )}>
      {children}
    </Tag>
  );
};

export default Typography;
