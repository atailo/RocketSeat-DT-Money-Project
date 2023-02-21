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
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextype)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, settransactions] = useState<transactions[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions/')
    const data = await response.json()

    settransactions(data)

  }
  useEffect(() => {
    loadTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>


  )
}