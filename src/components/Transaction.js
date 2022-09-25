import React from 'react'

//either we use props as component parameter or {transaction}
export const Transaction = ({transaction}) => {

    const sign = transaction.amount < 0 ? '-' : '+'
    
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn'>x</button>
        </li>
    )
}
