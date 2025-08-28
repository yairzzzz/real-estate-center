import type { HeaderProps } from "../types/types";
import Button from "./Button";
import LargerButton from "./LargerButton";

const Header = ({
  img,
  imgAlt,
  buttonStyles,
  buttonContentColor,
  headerStyles,
}: HeaderProps) => {
  return (
    <>
      <header
        className={`flex justify-between relative items-center ${headerStyles}`}
      >
        <a href="">
          <img src={img} alt={imgAlt} />
        </a>
        <Button styles={buttonStyles} contentColor={buttonContentColor} />
        <LargerButton styles={buttonStyles} contentColor={buttonContentColor} />
        <hr
          className={`hidden md:block absolute border-t-1 border-${buttonStyles} w-[65%] left-35 top-13`}
        />
      </header>
    </>
  );
};

export default Header;
