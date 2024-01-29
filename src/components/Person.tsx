import React from "react";
import { PersonType } from "./Person.types";

const Person = (props: PersonType) => {
  return <div>{props.name.firstName + " " + props.name.lastName}</div>;
};

export default Person;
