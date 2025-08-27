import type { HamburgerButtonProps } from "../types/types";

const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
  return (
    <button onClick={onClick} type="button" aria-label="פתח תפריט" className="">
      <span aria-hidden className="flex flex-col items-end gap-[3px]">
        <span className="h-[3px] w-5 bg-white" />
        <span className="h-[3px] w-4 bg-[#FF6A00]" />
        <span className="h-[3px] w-3 bg-white" />
      </span>
    </button>
  );
};

export default HamburgerButton;
