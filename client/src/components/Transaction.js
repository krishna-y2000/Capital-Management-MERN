import React,{useContext,useEffect} from 'react';
import { GlobalContext } from './GlobalState';
import { TransactionHistory } from "./TransactionHistory";
export const Transaction = () => {
    const { transactions, getTransaction} = useContext(GlobalContext);
    useEffect(() =>{
        getTransaction();
    },[]);
    return (
        <React.Fragment>
         <h3>History</h3>
         <ul  className="list">
            {transactions.map(transaction => (
                <TransactionHistory key={transaction.id} transaction={transaction}/>
            ))}
          </ul>
            
        </React.Fragment>
    )
}
