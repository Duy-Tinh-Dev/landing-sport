import { cn } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";

interface ILogoProps {
  className?: string;
}

const Logo = ({ className }: ILogoProps) => {
  return (
    <Link className={cn("w-[170px] block", className)} href="/">
      <Image src={logo} alt="logo"></Image>
    </Link>
  );
};

export default Logo;
