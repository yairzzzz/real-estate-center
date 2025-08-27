import { ChevronLeft } from "lucide-react";
import type { ButtonProps } from "../types/types";

const LargerButton = ({ styles, contentColor }: ButtonProps) => {
  return (
    <button
      className={`hidden md:flex items-center h-7 w-33 justify-center [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_10px)] mt-5 cursor-pointer ${styles}`}
    >
      <span className="text-xs">לעמוד המדור</span>
      <ChevronLeft className={` mr-3 size-4 ${contentColor}`} />
    </button>
  );
};

export default LargerButton;
