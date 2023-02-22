import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContaine } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

/**
 *****Porque um componente renderiza ?

 1- Um hook usado no componente mudou (estado, contexto, reducer);
 2-  Uma propriedade mudou 
 3- Um componete pai renderizou

 ________Qual o fluxo ?
 1- React recria o html da interface daquele componente
 2- Compara a versao do html renderizada com a anterior (neste caso vale a pena usar o useMemo)
 3- Se mudou alguma coisa ele reescreve o html na tela

 _______Usememo()

 0 - Adiciona um passo zero no fluxo anterior: Hooks mudaram ? props mudaram ?
 1- Se algum dos anteriores ele renderiza o html
 */

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContaine onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContaine>
  )
}
