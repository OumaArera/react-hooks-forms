import React from "react";
import { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const Parent = () =>{
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = event =>{
    setFirstName(event.target.value);
  }
  const handleLastNameChange = event =>{
    setLastName(event.target.value);
  }
  return (
    <div>
        <Form 
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  )
}

export default Parent