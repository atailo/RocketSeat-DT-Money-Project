import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { PriceFormatter } from "../../Utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
 
  const summary = useSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{PriceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong> {PriceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant={summary.total >=0 ? 'green' : 'red'}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={29} color="#fff" />
        </header>
        <strong>{PriceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer >
  )
}