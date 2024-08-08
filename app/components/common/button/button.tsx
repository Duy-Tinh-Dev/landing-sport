import { cn } from "@/app/utils";

interface IButtonProps {
  isOutline?: boolean;
  isPrimary?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  isOutline,
  isPrimary,
  className,
  children,
  onClick,
  ...rest
}: IButtonProps) => {
  const renderClassName = cn(
    "text-center transition-all font-bold hover:opacity-80 w-[190px] py-4 rounded-[40px]",
    {
      "border border-black": isOutline,
      "bg-primary text-white": isPrimary,
    },
    className
  );

  return (
    <button className={renderClassName} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
