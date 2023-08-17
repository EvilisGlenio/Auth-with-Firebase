'use client'
import { useContext, useEffect } from "react";
import { CredentialsCardForm, GoogleIcon, GoogleIconText, GoogleIconWrapper, InputText, LabelInput, MainContainer, RecuperationPasswordLink, SignInButton, SignInWithGoogle, WrapperComponent } from "./styles";
import { useRouter } from "next/navigation";
import { AuthContext, AuthContextProvider, useAuthContext } from "@/context/AuthContext";

export default function SignIn(){
  const {user, loading, handleSignInWithGoogle} = useAuthContext();
  const router = useRouter();

    // useEffect(() => {
    // router.push("/");
    // }, [user])

    function handleSignIn(){
      alert('En breve ...')  
    }

    function handleLogout() {

    }
  
  return (
    <AuthContextProvider>
        <MainContainer>
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
          </WrapperComponent>

          <RecuperationPasswordLink href="/">Esqueceu a senha?</RecuperationPasswordLink>
          
          <WrapperComponent>
            <SignInWithGoogle onClick={handleSignInWithGoogle}>
              <GoogleIconWrapper>
              <GoogleIcon rel="preload" src="https://www.vectorlogo.zone/logos/google/google-icon.svg" width={22} height={22} alt='...'/>
              </GoogleIconWrapper>
              <GoogleIconText>Entrar com o Google</GoogleIconText>
            </SignInWithGoogle>
          </WrapperComponent>

        </CredentialsCardForm>
      </MainContainer>
    </AuthContextProvider>
    )
    
  }