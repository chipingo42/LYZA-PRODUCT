import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className=" bg-primary-50 py-2 px-7 text-primary-20 rounded-full hover:bg-secondary-600 transition duration-500" 
      onClick={() => setSelectedPage(SelectedPage.Contactus)}
      href={`#${SelectedPage.Contactus}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;