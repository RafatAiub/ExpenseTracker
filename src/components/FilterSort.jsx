import { useState } from "react";

export default function FilterSort({ transactions, setFilteredTransactions }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const categories = [
    "All",
    "Education",
    "Food",
    "Health",
    "Bill",
    "Insurance",
    "Tax",
    "Transport",
    "Telephone",
    "Salary",
    "Outsourcing",
    "Bond",
    "Dividend",
  ];

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(
        transactions.filter((t) => t.category === category)
      );
    }
  };

  const handleSort = (order) => {
    setSortOrder(order); // Store the sort order in state

    // Create a copy of transactions
    let sortedTransactions = [...transactions];

    // Decide sorting logic
    if (order === "lowToHigh") {
      sortedTransactions.sort((a, b) => a.amount - b.amount); // Ascending
    } else if (order === "highToLow") {
      sortedTransactions.sort((a, b) => b.amount - a.amount); // Descending
    }

    setFilteredTransactions(sortedTransactions); // Update the UI 
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between">
      <div>
        <label className="mr-2">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => handleFilter(e.target.value)}
          className="border p-2 rounded-md"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mr-2">Sort by Amount:</label>
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="none">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
}
