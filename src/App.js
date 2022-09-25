import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import './App.css'
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
