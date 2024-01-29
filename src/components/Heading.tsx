import React from "react";
type HeadingPorptype = {
  children: string;
};

const Heading = (props: HeadingPorptype) => {
  return <div>{props.children}</div>;
};

export default Heading;
