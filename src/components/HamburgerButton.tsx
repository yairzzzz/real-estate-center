const HamburgerButton = () => {
  return (
    <button type="button" className="">
      <span aria-hidden className="flex flex-col items-end gap-[3px]">
        <span className="h-[3px] w-5 bg-white" />
        <span className="h-[3px] w-4 bg-[#FF6A00]" />
        <span className="h-[3px] w-3 bg-white" />
      </span>
    </button>
  );
};

export default HamburgerButton;
