import React,{useContext} from 'react';
import { GlobalContext } from './GlobalState';
import {commaAmount} from "../utility/commaAmount";
export const TransactionHistory = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (     
             <li className={transaction.amount<0 ? 'minus' : 'plus'} >
                {transaction.text} 
                 <span>{sign}${ commaAmount(Math.abs(transaction.amount))}</span>
                 <button onClick={()=> deleteTransaction(transaction._id)} className="delete-btn">x</button>
             </li> 
    )
}
