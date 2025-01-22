'use client'

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PurchaseForm from "./components/PurchaseForm"
import PurchasedDataList from "./components/PurchasedDataList"
import Header from "./components/Header"
import { useRouter } from "next/navigation"
import { Amplify } from 'aws-amplify'
import { signOut, getCurrentUser } from 'aws-amplify/auth'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import outputs from '@/amplify_outputs.json'

Amplify.configure(outputs)

export default function MyPage() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut()
      router.push('/login')
    } catch (error) {
      console.error('ログアウトに失敗しました:', error)
    }
  }

  return (
    <Authenticator.Provider>
      <AuthenticatedContent onLogout={handleLogout} />
    </Authenticator.Provider>
  )
}

function AuthenticatedContent({ onLogout }: { onLogout: () => Promise<void> }) {
  const { authStatus } = useAuthenticator(context => [context.authStatus])
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      try {
        await getCurrentUser()
        setIsLoading(false)
      } catch (error) {
        router.push('/login')
      }
    }
    checkAuth()
  }, [router])

  if (isLoading || authStatus !== 'authenticated') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      <Header onLogout={onLogout} />
      <div className="py-12">
        <div className="px-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">マイページ</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 w-full">
            <Tabs defaultValue="purchase" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="purchase" className="text-lg py-3">データ購入</TabsTrigger>
                <TabsTrigger value="view" className="text-lg py-3">購入済みデータ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="purchase" className="mt-12 w-full">
                <PurchaseForm />
              </TabsContent>
              
              <TabsContent value="view" className="mt-12 w-full">
                <PurchasedDataList />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
