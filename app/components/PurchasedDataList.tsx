"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const purchasedData = [
    { id: '1', name: '売上データ2024', price: '5000' },
    { id: '2', name: '顧客分析データ2024', price: '8000' },
    { id: '3', name: 'マーケット調査2024', price: '10000' },
]

export default function PurchasedDataList() {
  return (
    <div className="space-y-4">
      {purchasedData.map((data) => (
        <div key={data.id} className="flex items-center justify-between p-4 border rounded">
          <span>{data.name}</span>
          <Link href={`/data/${data.id}`}>
            <Button>詳細を見る</Button>
          </Link>
        </div>
      ))}
    </div>
  )
}
