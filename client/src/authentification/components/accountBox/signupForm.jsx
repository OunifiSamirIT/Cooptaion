import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";




export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToRegistre } = useContext(AccountContext);
  

  return (
    
    <BoxContainer>
      <FormContainer>
        
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Code d'invitation" />
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      
      <><SubmitButton type="submit" onClick={() => switchToRegistre('/Registre')}>
          s'inscrire</SubmitButton></>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
      Vous avez déjà un compte? 
        <BoldLink href="#" onClick={switchToSignin}>
          Se connecter
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
