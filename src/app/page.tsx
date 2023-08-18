'use client'

import { useRouter } from 'next/navigation';
import { CredentialsCardForm, MainContainer } from "./Sign-In/styles";
import Image from "next/image";
import { useAuthContext, } from "@/context/AuthContext";
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const {user} = useAuthContext();

  // useEffect(() => {
  //   router.push("/Sign-In")
  // }, [loading == null])

  return (
    <MainContainer>
          {user && <CredentialsCardForm>
            {user.photoURL && <Image src={user.photoURL} alt="Foto de Perfil" width={50} height={50} />}
            <strong>{user.displayName}</strong>
            <small>{user.email}</small>
          </CredentialsCardForm>}
     </MainContainer>
  )
}
