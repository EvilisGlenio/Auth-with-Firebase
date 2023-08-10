import { User } from 'firebase/auth';
import { createContext, useState } from 'react';

// Definindo o tipo para o contexto
interface IAuthContext {
  // Defina os campos do contexto aqui
  user: any;
  // ...
}

const defaultValues : IAuthContext = {
  user: null,
}

// Criando o contexto
export const AuthContext = createContext({ ...defaultValues });

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
};