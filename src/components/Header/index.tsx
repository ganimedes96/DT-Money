import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  NewTransactionButton,
} from './styles'
import { Player } from '@lottiefiles/react-lottie-player'
import Cash from '../../assets/money.json'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>
          <Player
            autoplay
            loop
            src={Cash}
            style={{ height: '70px', width: '70px' }}
          />
          <h2>DT Many</h2>
        </HeaderTitle>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transacao</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
