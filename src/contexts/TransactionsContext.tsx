import { createContext, ReactNode, useEffect, useState } from "react";


interface transactions {
  id: number;
  description: string;
  type: "income" | "outcome"
  category: string;
  price: number;
  createdAt: string
}


interface TransactionsContextype {
  transactions: transactions[]
  fetchTransactions: (query?:string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextype)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, settransactions] = useState<transactions[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions/')

    if(query){
      url.searchParams.append('q', query)
    }
    const response = await fetch(url)
    const data = await response.json()

    settransactions(data)

  }
  useEffect(() => {
    fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>


  )
}