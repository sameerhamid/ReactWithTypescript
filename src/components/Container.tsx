import React from "react";

type ContainerPorps = {
  style: React.CSSProperties;
};

const Container = (props: ContainerPorps) => {
  console.log(props.style);

  return <div style={props.style}>I am a container</div>;
};

export default Container;
