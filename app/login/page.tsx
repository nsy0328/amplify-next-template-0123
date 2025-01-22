'use client'

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';

Amplify.configure(outputs);

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <Authenticator>
          {({ signOut, user }) => {
            const AuthenticatedComponent = () => {
              useEffect(() => {
                router.push('/')
              }, [])
              return null
            }
            
            return <AuthenticatedComponent />
          }}
        </Authenticator>
      </div>
    </div>
  )
}
