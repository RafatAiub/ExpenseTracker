import { useState, useEffect } from "react";

export default function ExpenseForm({
  addTransaction,
  updateTransaction,
  editingTransaction,
  setEditingTransaction
}) {
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState(null);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(null);

  const categories = {
    Income: ["please select one", "Salary", "Outsourcing", "Bond", "Dividend"],
    Expense: [
      "please select one",
      "Education",
      "Food",
      "Health",
      "Bill",
      "Insurance",
      "Tax",
      "Transport",
      "Telephone",
    ],
  };

  useEffect(() => {
    if (editingTransaction) {
      setType(editingTransaction.type);
      setCategory(editingTransaction.category);
      setAmount(editingTransaction.amount);
      setDate(editingTransaction.date);
      setId(editingTransaction.id);
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date || !categories[type] )
      return alert("Please fill all fields!");

    const newTransaction = {
      id: id || Date.now(),
      type,
      category,
      amount: parseFloat(amount),
      date,
    };

    if (id) {
      updateTransaction(newTransaction);
    } else {
      addTransaction(newTransaction);
    }

    setType("Expense");
    setCategory("Education");
    setAmount("");
    setDate("");
    setId(null);
    setEditingTransaction(null);

  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
      <div className="flex space-x-2 mb-3">
        {[ "Income","Expense"].map((t) => (
          <button
            key={t}
            type="button"
            className={`w-1/2 py-2 rounded-md ${
              type === t
                ? "bg-teal-500 text-white"
                : "bg-white text-gray-700 border"
            } `}
            onClick={() => {
              setType(t);
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <label className="block mb-2">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      >
        {categories[type].map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <label className="block mb-2">Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />

      <label className="block mb-2">Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />

      <button className="w-full bg-teal-500 text-white py-2 rounded-md">
        {id ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}
