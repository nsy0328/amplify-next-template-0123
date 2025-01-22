"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function DataDetailPage() {
  const { id } = useParams()
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際のパスワード検証ロジックを実装します
    console.log("Unlock attempt:", password)
    setIsUnlocked(true)
  }

  const handleDownload = () => {
    // ここで実際のダウンロードロジックを実装します
    console.log("Downloading data:", id)
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>データ {id} の詳細</CardTitle>
        </CardHeader>
        <CardContent>
          {!isUnlocked ? (
            <form onSubmit={handleUnlock} className="space-y-4">
              <Input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit">ロック解除</Button>
            </form>
          ) : (
            <Button onClick={handleDownload}>Excelデータをダウンロード</Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

