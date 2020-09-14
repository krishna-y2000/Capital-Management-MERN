import React from 'react'
import {Header} from "./components/Header";
import "./App.css";
import { Balance } from './components/Balance';
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Transaction } from "./components/Transaction";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider  } from "./components/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header /> 
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <Transaction />
      <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
