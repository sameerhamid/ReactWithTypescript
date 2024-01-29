import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";
import Status from "./components/Status";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";

function App() {
  const name = {
    firstName: "sameer",
    lastName: "ahmad",
  };

  const personList = [
    {
      firstName: "sameer",
      lastName: "ahmad",
    },
    {
      firstName: "tabish",
      lastName: "ahmad",
    },
    {
      firstName: "irshad",
      lastName: "ahmad",
    },
  ];

  return (
    <>
      <div>
        {
          // <Greet name="sameer" isLoggedIn={true} messageCount={22} />
          /*<Person name={name} />
        <PersonList personList={personList} />
        <Status status="error" /> */
        }

        {/* <Oscar>
          <Heading>Placeholder Text</Heading>
        </Oscar> */}

        {/* <Button
          handleClick={(event, id) => {
            console.log(event, id);
          }}
        /> */}

        {/* <Input
          value="sameer"
          handleChange={(event) => console.log(event.target.value)}
        /> */}

        {/* <Container style={{ border: "1px solid green", padding: "1rem" }} /> */}

        {/* <LoggedIn /> */}

        {/* <User /> */}

        <Counter />
      </div>
    </>
  );
}

export default App;
