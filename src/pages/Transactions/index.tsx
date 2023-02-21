import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { DateFormatter, PriceFormatter } from "../../Utils/formatter";
import { SearchForm } from "./components/Seachform";
import { PricehighLigth, TransactionsContainer, TransactionsTable } from "./styles";



export function Transactions() {

  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PricehighLigth variant={transaction.type}>

                    {PriceFormatter.format(transaction.price)}
                    </PricehighLigth>
                  </td>
                  <td>{transaction.category}</td>
                  <td> {DateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}