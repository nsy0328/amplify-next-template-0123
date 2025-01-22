"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard } from "lucide-react"

export default function PaymentInfoForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="card-number">カード番号</Label>
        <div className="relative">
          <Input id="card-number" placeholder="4242 4242 4242 4242" className="pl-10" />
          <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry">有効期限</Label>
          <Input id="expiry" placeholder="MM/YY" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cvc">セキュリティコード</Label>
          <Input id="cvc" placeholder="123" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name-on-card">カード名義</Label>
        <Input id="name-on-card" placeholder="TARO YAMADA" />
      </div>

      <Button type="submit" className="w-full">
        カードを登録
      </Button>
    </form>
  )
}

