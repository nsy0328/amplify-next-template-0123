"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Settings } from "lucide-react"
import SettingsSidebar from "./SettingsSidebar"

interface HeaderProps {
  onLogout: () => void
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <header className="border-b">
      <div className="px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">アプリ名</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px]">
            <SettingsSidebar onLogout={onLogout} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

