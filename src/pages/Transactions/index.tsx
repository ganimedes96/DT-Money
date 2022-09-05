import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Sammary'
import { SearchForm } from '../../components/Sammary/Components/SearchForm'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/Formatter'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)
  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  )
}
