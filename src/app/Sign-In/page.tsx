// 'use client'
// import { useContext } from "react";
// import { CredentialsCardForm, GoogleIcon, GoogleIconText, GoogleIconWrapper, InputText, LabelInput, MainContainer, RecuperationPasswordLink, SignInButton, SignInWithGoogle, WrapperComponent } from "./styles";
// import { useRouter } from "next/navigation";
// import { AuthContext, AuthContextProvider } from "@/context/AuthContext";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "@/services/firebase";

// export default function SignIn(){
//   const {setUser} = useContext(AuthContext);
//   const router = useRouter();

//     // useEffect(() => {
//     // router.push("/");
//     // }, [])

//     function handleSignInWithGoogle(){
//       const provider = new GoogleAuthProvider();
  
//       signInWithPopup(auth, provider)
//       .then((result) => {
//         setUser(result.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//     }

//     function handleSignIn(){
//       alert('En breve ...')  
//     }
  
//   return (
//     <AuthContextProvider>
//         <MainContainer>
//         <CredentialsCardForm>
//           <WrapperComponent>
//             <LabelInput htmlFor="email">E-mail:</LabelInput>
//             <InputText type="email" name="email" id="email" />
//           </WrapperComponent>
//           <WrapperComponent>
//             <LabelInput htmlFor="password">Senha:</LabelInput>
//             <InputText type="password" name="password" id="password" />
//           </WrapperComponent>
//           <WrapperComponent>
//             <SignInButton onClick={handleSignIn}>Entrar</SignInButton>
//           </WrapperComponent>
//           <RecuperationPasswordLink href="/">Esqueceu a senha?</RecuperationPasswordLink>
          
//           <WrapperComponent>
//             <SignInWithGoogle onClick={handleSignInWithGoogle}>
//               <GoogleIconWrapper>
//                 <GoogleIcon src="https://www.vectorlogo.zone/logos/google/google-icon.svg"/>
//               </GoogleIconWrapper>
//               <GoogleIconText>Entrar com o Google</GoogleIconText>
//             </SignInWithGoogle>
//           </WrapperComponent>

//         </CredentialsCardForm>
//       </MainContainer>
//     </AuthContextProvider>
//     )
    
//   }