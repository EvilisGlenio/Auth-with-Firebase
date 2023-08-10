'use client'

import { useContext,  } from "react";
import { useRouter } from 'next/navigation'
import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../services/firebase';
import { CredentialsCardForm, GoogleIcon, GoogleIconText, GoogleIconWrapper, InputText, LabelInput, MainContainer, RecuperationPasswordLink, SignInButton, SignInWithGoogle, WrapperComponent } from "./Sign-In/styles";
import Image from "next/image";
import { AuthContext, } from "@/context/AuthContext";


export default function Home() {
  const router = useRouter();

  const {user} = useContext(AuthContext)

  // useEffect(() => {
  //   router.push('/Sign-In')
  // }, [])
  
  function handleSignInWithGoogle() {
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
          {user && <CredentialsCardForm>
            {user.photoURL && <Image src={user.photoURL} alt="Foto de Perfil" width={50} height={50} />}
            <strong>{user.displayName}</strong>
            <small>{user.email}</small>
          </CredentialsCardForm>}
       
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
