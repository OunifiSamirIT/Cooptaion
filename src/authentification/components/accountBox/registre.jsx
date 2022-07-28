import React, { useContext } from "react";
import {

  BoxContainer,
 
  Input,
 
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function Registre(props) {
 const { signupAnimation } = useContext(AccountContext);

  return (
    <BoxContainer>
        <Input type="text" placeholder="Nom" />
        <Marginer direction="vertical" margin={20} />

        <Input type="text" placeholder="Prénom" />
        <Marginer direction="vertical" margin={20} />

        <Input type="email" placeholder="Email" />
        <Marginer direction="vertical" margin={20} />

        <Input type="Specialte" placeholder="profile" />
        <Marginer direction="vertical" margin={20} />
        
        
     



      <Marginer direction="vertical" margin={30} />
      <SubmitButton type="submit" onClick={signupAnimation}>Registrer</SubmitButton>
      <Marginer direction="vertical" margin="10em" />
     
    </BoxContainer>
  );
}