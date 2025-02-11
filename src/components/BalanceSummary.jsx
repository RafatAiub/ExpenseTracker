export default function BalanceSummary({ transactions }) {
  console.log(transactions);
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-5 text-center bg-gray-100 p-4 rounded-lg">
      <div>
        <h3 className="text-lg font-bold">Balance</h3>
        <p
          className={`text-xl font-bold ${
            balance < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          BDT {balance}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Income</h3>
        <p className="text-xl text-green-500 font-bold">BDT {income}</p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Expense</h3>
        <p className="text-xl text-red-500 font-bold">BDT {expense}</p>
      </div>
    </div>
  );
}
