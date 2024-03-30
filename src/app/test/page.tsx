'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from "react"


export default function Test() {
  const router = useRouter();

  const apiCall = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/test', { cache: 'no-cache' })
      const body = await response.json();
      console.log(body);
    } catch (e) {
      router.push('/login');
    }
  }

  useEffect(() => {
    console.log('hello i am testing');
    apiCall();
  }, []);

  return (
    <div>Test Page</div>
  )
}