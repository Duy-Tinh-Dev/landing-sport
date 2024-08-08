import { useState } from "react";
import { SlEye } from "react-icons/sl";
import { GoEyeClosed } from "react-icons/go";
import { Button } from "../button";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { cn } from "@/app/utils";

export interface InputProps<TField extends FieldValues> {
  className?: string;
  wrapClassName?: string;
  label?: string;
  type?: "text" | "password";
  placeholder?: string;
  controlProps: UseControllerProps<TField>;
  isArea?: boolean;
}

const Input = <TField extends FieldValues>({
  label,
  type,
  className,
  wrapClassName,
  controlProps,
  placeholder,
  isArea,
}: InputProps<TField>) => {
  const {
    field: { ref, value, onChange },
    fieldState: { error },
  } = useController(controlProps);

  const classNameInput =
    "outline-none h-12 md:h-[65px] w-full rounded-md px-3 py-2 md:px-[30px] md:py-[18px] z-[1] bg-transparent placeholder:text-tuna/[50%] md:placeholder:text-xl placeholder:font-medium";

  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggleFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleToggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className={wrapClassName}>
      {label && (
        <span
          className={cn(
            "bg-white transition-all text-tuna text-lg md:text-[22px] mb-2.5 inline-block",
            {
              "text-red-600": error,
            }
          )}>
          {label}
        </span>
      )}
      <div
        className={cn(
          "w-full border border-gray-social-border rounded-[10px] transition-all flex bg-transparent",
          {
            "border-gray-400": isFocused,
            "border-red-600": error?.message,
          },
          className
        )}>
        {isArea ? (
          <textarea
            value={value ?? ""}
            onFocus={handleToggleFocus}
            onBlur={handleToggleFocus}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            className={cn(classNameInput, "resize-none h-[184px]")}
          />
        ) : (
          <input
            type={isShowPassword ? "text" : type}
            className={classNameInput}
            value={value ?? ""}
            onFocus={handleToggleFocus}
            onBlur={handleToggleFocus}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
          />
        )}
        {type === "password" && (
          <Button
            className="px-4 rounded-tr-md rounded-br-md hover:bg-gray-100"
            onClick={handleToggleShowPassword}>
            {isShowPassword ? <GoEyeClosed size={20} /> : <SlEye size={20} />}
          </Button>
        )}
      </div>
      {error?.message && (
        <div className="flex items-center gap-2 mt-1">
          <p className="text-red-600 text-sm">{error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
