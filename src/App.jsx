import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import TransactionList from "./components/TransactionList";
import BalanceSummary from "./components/BalanceSummary";
import FilterSort from "./components/FilterSort";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // নতুন ট্রান্সেকশন যোগ করা
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setFilteredTransactions([...transactions, transaction]);
  };

  // ট্রান্সেকশন আপডেট করা
  const updateTransaction = (updatedTransaction) => {
    console.log(updatedTransaction);

    const updatedList = transactions.map((t) =>
      t.id === updatedTransaction.id ? updatedTransaction : t
    );
    setTransactions(updatedList);
    setFilteredTransactions(updatedList);
    setEditingTransaction(updatedTransaction);
  };

  // ট্রান্সেকশন ডিলিট করা
  const deleteTransaction = (id) => {
    const updatedList = transactions.filter((t) => t.id !== id);
    setTransactions(updatedList);
    setFilteredTransactions(updatedList);
    setEditingTransaction(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Expense Tracker
      </h1>
      <BalanceSummary transactions={transactions} />
      <FilterSort
        transactions={transactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <ExpenseForm
          addTransaction={addTransaction}
          updateTransaction={updateTransaction}
          editingTransaction={editingTransaction}
          setEditingTransaction={setEditingTransaction}
        />
        <TransactionList
          transactions={filteredTransactions}
          updateTransaction={updateTransaction}
          setEditingTransaction={setEditingTransaction}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}
