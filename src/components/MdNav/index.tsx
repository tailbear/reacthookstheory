import React from "react";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";

interface Props {
  md: string;
}

const MdNav = (props: Props) => {
  const { md } = props;

  return (
    <MarkNav
      className='article-menu'
      source={md}
      headingTopOffset={80}
      ordered={false}
    />
  );
};

export default MdNav;
