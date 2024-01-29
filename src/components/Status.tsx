import React from "react";

type StatusProp = {
  status: "laoding" | "success" | "error";
};

const Status = (props: StatusProp) => {
  let message;
  if (props.status === "laoding") {
    message = "loading...";
  } else if (props.status === "success") {
    message = " Data loaded successfully!";
  } else if (props.status === "error") {
    message = "Error";
  }

  console.log(message);

  return (
    <div>
      <div>{message}</div>
    </div>
  );
};
export default Status;
