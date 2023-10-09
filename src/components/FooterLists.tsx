import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
}

export const FooterLists = ({ text, link }: Props) => {
  return (
    <li>
      <Link className="footer-link" to={`/${link}`}>
        {text}
      </Link>
    </li>
  );
};
