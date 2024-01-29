import React from "react";

type GreetProp = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProp) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn ? (
          <div>
            Hellow {props.name} you have {messageCount} unread messages
          </div>
        ) : (
          <div>Hello Guest</div>
        )}
      </h2>
    </div>
  );
};

export default Greet;
