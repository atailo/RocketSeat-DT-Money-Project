import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Closebutton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type newTransctionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTRansactionModal() {

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<newTransctionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })
  async function handleCreateNewTransaction(data: newTransctionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);

  }

  return (
    <Dialog.Portal >
      <Overlay />
      <Content>
        <Closebutton>
          <X />
        </Closebutton>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            type="number
          " placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder='Categoria'
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {

              return (
                <TransactionType onValueChange={field.onChange}>
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}

          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

      </Content>
    </Dialog.Portal >
  )
}