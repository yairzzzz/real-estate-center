import HamburgerButton from "./HamburgerButton";

const MobileNavbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#5806C7] h-22 block md:hidden">
      <div className="w-full h-full flex justify-between items-center px-3">
        <a href="/">
          <img src="/real-estate-center-icon.png" alt='מרכז הנדל"ן' />
        </a>

        <HamburgerButton onClick={() => console.log("lala")} />
      </div>
    </header>
  );
};

export default MobileNavbar;
