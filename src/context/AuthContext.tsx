'use client'

import { auth } from '@/services/firebase';
import { GoogleAuthProvider, User, signInWithPopup, } from 'firebase/auth';
import error from 'next/error';
import { useRouter } from 'next/navigation';
import { createContext, useState, useContext, useEffect } from 'react';

// Definindo o tipo para o contexto
interface IAuthContext {
  // Defina os campos do contexto aqui
  user: User | null;
  setUser: any;
  handleSignInWithGoogle: boolean;
  setHandleSignInWithGoogle: React.Dispatch<React.SetStateAction<boolean>>;
  // ...
}

const defaultValues : IAuthContext = {
  user: null,
  setUser: null,
  handleSignInWithGoogle: false, 
  setHandleSignInWithGoogle: () => {}, 
}

// Criando o contexto
export const AuthContext = createContext({ ...defaultValues });

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [handleSignInWithGoogle, setHandleSignInWithGoogle] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    if (!handleSignInWithGoogle) {
      alert('ok...')
      console.log('clicado')
      const provider = new GoogleAuthProvider();
  
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user)
          router.push("/")
        })
        .catch((error) => {
          console.log(error)
          // // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.customData.email;
          // // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
  }, [handleSignInWithGoogle])

  return (
    <AuthContext.Provider value={{ user, setUser, handleSignInWithGoogle, setHandleSignInWithGoogle  }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext);