'use client'

import { useEffect, useState } from "react";
import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../services/firebase';
import { CredentialsCardForm, GoogleIcon, GoogleIconText, GoogleIconWrapper, InputText, LabelInput, MainContainer, RecuperationPasswordLink, SignInButton, SignInWithGoogle, WrapperComponent } from "./Sign-In/styles";


export default function Home() {
  const [user, setUser] = useState<User>({} as User);

    function handleSignIn(){
      alert('En breve ...')  
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
  
  return (
    <MainContainer>
      <div>
         {user.photoURL && <img src={user.photoURL} alt="foto do usuário"/>}
         <strong>{user.displayName}</strong>
         <small>{user.email}</small>
       </div>
       <CredentialsCardForm>
          <WrapperComponent>
           <LabelInput htmlFor="email">E-mail:</LabelInput>
           <InputText type="email" name="email" id="email" />
          </WrapperComponent>

          <WrapperComponent>
            <LabelInput htmlFor="password">Senha:</LabelInput>
            <InputText type="password" name="password" id="password" />
          </WrapperComponent>
         
         <WrapperComponent>
         <SignInButton onClick={handleSignIn}>Entrar</SignInButton>
         <RecuperationPasswordLink href="/">Esqueceu a senha?</RecuperationPasswordLink>
         </WrapperComponent>

          <WrapperComponent>
            <SignInWithGoogle onClick={handleSignInWithGoogle}>
             <GoogleIconWrapper>
               <GoogleIcon src="https://www.vectorlogo.zone/logos/google/google-icon.svg"/>
             </GoogleIconWrapper>
             <GoogleIconText>Entrar com o Google</GoogleIconText>
           </SignInWithGoogle>
          </WrapperComponent>
       </CredentialsCardForm>
     </MainContainer>
  )
}
