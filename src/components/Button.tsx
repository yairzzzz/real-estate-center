import { ChevronLeft } from "lucide-react";
import type { ButtonProps } from "../types/types";

const Button = ({ styles, contentColor }: ButtonProps) => {
  return (
    <button
      className={`md:hidden h-7 w-11 text-[13px] flex items-center justify-center relative [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_10px)] mt-5 cursor-pointer ${styles}`}
    >
      <ChevronLeft className={`absolute left-5 size-4 ${contentColor}`} />
      <ChevronLeft className={`absolute right-4 size-4 ${contentColor}`} />
    </button>
  );
};

export default Button;
