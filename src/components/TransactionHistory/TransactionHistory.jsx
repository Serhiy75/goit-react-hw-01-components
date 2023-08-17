import { TransactionHistoryItems } from '../TransactionHistoryItems/TransactionHistoryItems'
import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return <table className={css['transaction-history']}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((el) => {
                return <TransactionHistoryItems key={el.id} {...el} />
            })}
        </tbody>
    </table>
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
     }))
}


