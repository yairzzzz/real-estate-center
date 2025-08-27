import type { FooterProps } from "../types/types";

const Footer = ({ date, author, styles }: FooterProps) => {
  return (
    <footer className={`text-gray-400 mt-3 block ${styles}`}>
      <span className="ml-1">{date}</span> |{" "}
      <span className="mr-1">{author}</span>
    </footer>
  );
};

export default Footer;
