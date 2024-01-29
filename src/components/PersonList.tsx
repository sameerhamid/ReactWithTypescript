import React from "react";
import { Name } from "./Person.types";

type PersonListType = {
  personList: Name[];
};
export const PersonList = (props: PersonListType) => {
  return (
    <div>
      {props.personList.map((person) => (
        <div key={person.lastName}>{person.firstName}</div>
      ))}
    </div>
  );
};
