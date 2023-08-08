'use client'
import { useEffect, useState } from "react";
import { CredentialsCardForm, GoogleIcon, GoogleIconText, GoogleIconWrapper, InputText, LabelInput, MainContainer, RecuperationPasswordLink, SignInButton, SignInWithGoogle } from "./styles";
import { useRouter } from "next/navigation";
import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../../services/firebase';

export default function SignIn(){
  const [user, setUser] = useState<User>({} as User);
  const router = useRouter();

    // useEffect(() => {
    // router.push("/");
    // }, [user])

  function handleSignIn(){
    //setUser()
  }

  function handleSignInWithGoogle(){
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return(
    <MainContainer>
      <CredentialsCardForm>
        <div>
          <LabelInput htmlFor="email">E-mail:</LabelInput>
          &nbsp;
          <InputText type="email" name="email" id="email" />
        </div>
        <br />
        <div>
          <LabelInput htmlFor="password">Senha:</LabelInput>
          &nbsp;
          <InputText type="password" name="password" id="password" />
        </div>
        <br />
        <div>
          <SignInButton onClick={handleSignIn}>Entrar</SignInButton>
        </div>
        <RecuperationPasswordLink href="/">Esqueceu a senha?</RecuperationPasswordLink>
        <br />
        <div>
          <SignInWithGoogle onClick={handleSignInWithGoogle}>
            <GoogleIconWrapper>
              <GoogleIcon src="https://www.vectorlogo.zone/logos/google/google-icon.svg"/>
            </GoogleIconWrapper>
            <GoogleIconText>Entrar com o Google</GoogleIconText>
          </SignInWithGoogle>
        </div>
      </CredentialsCardForm>
    </MainContainer>
  )
};