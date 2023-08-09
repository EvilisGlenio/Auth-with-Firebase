'use client'

import { useEffect, useState } from "react";
import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../services/firebase';
import { CredentialsCardForm, GoogleIcon, GoogleIconText, GoogleIconWrapper, InputText, LabelInput, MainContainer, RecuperationPasswordLink, SignInButton, SignInWithGoogle, WrapperComponent } from "./Sign-In/styles";
import Image from "next/image";


export default function Home() {
  const [user, setUser] = useState<User>({} as User);
  
  function handleSignInWithGoogle(){
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <MainContainer>
          <div>
            {user.photoURL && <Image src={user.photoURL} alt="Foto de Perfil" />}
            <strong>{user.displayName}</strong>
            <small>{user.email}</small>
          </div>
       
          <WrapperComponent>
            <SignInWithGoogle onClick={handleSignInWithGoogle}>
             <GoogleIconWrapper>
               <GoogleIcon src="https://www.vectorlogo.zone/logos/google/google-icon.svg"/>
             </GoogleIconWrapper>
             <GoogleIconText>Entrar com o Google</GoogleIconText>
           </SignInWithGoogle>
          </WrapperComponent>
     </MainContainer>
  )
}
