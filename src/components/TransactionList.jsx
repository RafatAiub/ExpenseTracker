export default function TransactionList({ transactions, updateTransaction, deleteTransaction }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Transactions</h2>
        {transactions.length === 0 ? <p>No transactions added.</p> : (
          <ul>
            {transactions.map((t) => (
              <li key={t.id} className="flex justify-between p-2 border-b">
                <span>{t.category} - {t.date}</span>
                <span className={`font-bold ${t.type === "Expense" ? "text-red-500" : "text-green-500"}`}>
                  BDT {t.amount}
                </span>
                <div>
                  <button onClick={() => updateTransaction(t)} className="text-blue-500 mx-2">Edit</button>
                  <button onClick={() => deleteTransaction(t.id)} className="text-red-500">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  