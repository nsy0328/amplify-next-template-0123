"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import PersonalInfoForm from "./PersonalInfoForm"
import PaymentInfoForm from "./PaymentInfoForm"

interface SettingsSidebarProps {
  onLogout: () => void
}

export default function SettingsSidebar({ onLogout }: SettingsSidebarProps) {
  return (
    <div className="h-full py-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">設定</h2>
      <Tabs defaultValue="personal" className="flex-1">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="personal">個人情報</TabsTrigger>
          <TabsTrigger value="payment">支払い情報</TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <PersonalInfoForm />
        </TabsContent>
        <TabsContent value="payment">
          <PaymentInfoForm />
        </TabsContent>
      </Tabs>
      <Button
        variant="ghost"
        className="w-full justify-start mt-auto"
        onClick={onLogout}
      >
        <LogOut className="mr-2 h-4 w-4" />
        ログアウト
      </Button>
    </div>
  )
}

