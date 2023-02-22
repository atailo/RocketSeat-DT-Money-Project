import { HeaderContainer, HeaderContent, NewTransactionbutton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTRansactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionbutton>Nova Transação</NewTransactionbutton>
          </Dialog.Trigger>
          <NewTRansactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
