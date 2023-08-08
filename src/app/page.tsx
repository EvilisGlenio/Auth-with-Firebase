'use client'
import {useRouter} from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Sign-In");
  }, [])
  return (
    <>
      <h1>Teste...</h1>
    </>
  )
}
