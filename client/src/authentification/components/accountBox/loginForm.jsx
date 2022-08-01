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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Mot de passe" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Mot de passe oublier?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Se connecter</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
      Vous n'avez pas de compte ?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
        S'inscrire
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
