'use client'
import { auth } from '@/services/firebase';
import { GoogleAuthProvider, User, signInWithPopup, } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { createContext, useState, useContext, useEffect } from 'react';

// Definindo o tipo para o contexto
interface IAuthContext {
  // Defina os campos do contexto aqui
  user: any;
  loading: any;
  handleSignInWithGoogle: () => void;
  // ...
}

const defaultValues : IAuthContext = {
  user: null,
  loading: null,
  handleSignInWithGoogle: () => {},
}

// Criando o contexto
export const AuthContext = createContext({ ...defaultValues });

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  function handleSignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user)
      setLoading(true)
      router.push("/")
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => alert('Funcionando!!'))
  }

  return (
    <AuthContext.Provider value={{ user, loading, handleSignInWithGoogle  }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext);