"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// 商品データの型定義
type ProductData = {
  id: string
  name: string
  description: string
  price: number
}

// サンプルデータ
const availableData: ProductData[] = [
  {
    id: "1",
    name: "売上データ2024",
    description: "2024年度の月次売上データ。業界別・地域別の詳細な分析が含まれています。",
    price: 5000
  },
  {
    id: "2",
    name: "顧客分析データ2024",
    description: "顧客セグメント分析、購買行動パターン、顧客満足度調査の結果など。",
    price: 8000
  },
  {
    id: "3",
    name: "マーケット調査2024",
    description: "市場動向、競合分析、消費者トレンドなどの包括的な調査結果。",
    price: 10000
  },
  {
    id: "4",
    name: "業界レポート2024",
    description: "主要産業の動向分析、将来予測、リスク分析を含む詳細レポート。",
    price: 12000
  }
]

export default function PurchaseForm() {
  const [email, setEmail] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null)
  const [sendEmail, setSendEmail] = useState(false)

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Purchase:", selectedProduct?.id, sendEmail ? email : null)
    // ここで実際の購入処理を実装
    setEmail("")
    setSelectedProduct(null)
    setSendEmail(false)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {availableData.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">¥{product.price.toLocaleString()}</p>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={() => setSelectedProduct(product)}>
                  購入する
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{product.name}の購入</DialogTitle>
                </DialogHeader>
                <form onSubmit={handlePurchase} className="space-y-4">
                  <div>
                    <p className="mb-2">価格: ¥{product.price.toLocaleString()}</p>
                    <p className="mb-4 text-sm text-gray-600">{product.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="sendEmail"
                        checked={sendEmail}
                        onChange={(e) => setSendEmail(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <label htmlFor="sendEmail">データをメールで受け取る</label>
                    </div>
                    {sendEmail && (
                      <Input
                        type="email"
                        placeholder="メールアドレスを入力してください"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={sendEmail}
                      />
                    )}
                  </div>
                  <Button type="submit" className="w-full">確定して購入</Button>
                </form>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

