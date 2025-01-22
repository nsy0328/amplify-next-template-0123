"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PersonalInfoForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">名前</Label>
        <Input id="name" placeholder="山田 太郎" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス（主）</Label>
        <Input id="email" type="email" placeholder="example@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="secondary-email">メールアドレス（サブ）</Label>
        <Input id="secondary-email" type="email" placeholder="sub@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">住所</Label>
        <Textarea id="address" placeholder="〒123-4567&#13;東京都渋谷区..." className="resize-none" />
      </div>

      <Button type="submit" className="w-full">
        保存
      </Button>
    </form>
  )
}

