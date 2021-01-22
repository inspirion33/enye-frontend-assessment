import React, { useState } from 'react'
import TransactionItem from "./TransactionItem"

const Transactions = ({ transactionDatas, loading }) => {

    // console.log("TransactionData", transactionDatas);
    if(loading) {
        return <h2>Loading...</h2>;
    } else {
        return (
            <div>
                {transactionDatas.map((transaction) => {
                    return (
                        <TransactionItem key={transaction.Email} transaction={transaction} />
                    );
                })}
            </div>
        )
    }
}

export default Transactions;