import { useState, useEffect } from "react";
import { assets } from "../../../assets/assets";

export const Transactions = () => {
  const [accounts, setAccounts] = useState([]);
  const [showBalance, setShowBalance] = useState({});
  const [activeAccount, setActiveAccount] = useState(0);
  const [visibleTransactions, setVisibleTransactions] = useState(6);

  const selectedAccount = accounts[activeAccount];

  const displayedTransactions = selectedAccount?.transactions?.slice(-visibleTransactions).reverse() || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setAccounts(data.accounts);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAccountClick = (index) => {
    setActiveAccount(index);
    setVisibleTransactions(6);
  };

  const toggleBalance = (index) => {
    setShowBalance((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-6">
        {accounts.map((account, index) => (
          <div
            key={index}
            onClick={() => handleAccountClick(index)}
            className="relative bg-green-400/20 rounded-xl py-6 px-10 flex flex-col justify-center cursor-pointer"
          >
            {activeAccount === index && (
              <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-2.5 bg-purple-900" />
            )}

            <div className="flex items-center justify-between w-full">
              <h3 className="text-purple-900 font-medium">{account.name}</h3>

              <img
                src={showBalance[index] ? assets.eyeCrossed : assets.eye}
                alt="toggle balance"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBalance(index);
                }}
                className="w-4 h-4 cursor-pointer"
              />
            </div>

            <p className="text-lg font-bold tracking-tight scale-y-150 mt-3">
              {showBalance[index]
                ? "XXXXXXXX"
                : `₦ ${account.balance.toFixed(2)}`}
            </p>
          </div>
        ))}
      </div>

      {/* Transactions */}
      {selectedAccount && (
        <div className="mt-12 px-6">
          <div className="overflow-x-auto">
            <div className="space-y-2 min-w-[850px] sm:min-w-0">
              {displayedTransactions.map((transaction, index) => (
                <div
                  key={transaction.id}
                  className={`grid grid-cols-[60px_180px_150px_180px_120px_150px] xl:grid-cols-[60px_1.5fr_1fr_1.5fr_1fr_160px] items-center gap-2 xl:gap-4 py-2 ${
                    index !== displayedTransactions.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* ICON */}
                  <div>
                    {transaction.type === "credit" ? (
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* NAME */}
                  <div className="text-gray-600">{transaction.name}</div>

                  {/* METHOD */}
                  <div className="text-gray-500 capitalize">
                    {transaction.method.replace("_", " ")}
                  </div>

                  {/* DATE */}
                  <div className="text-gray-500">{transaction.date}</div>

                  {/* AMOUNT */}
                  <div
                    className={`font-semibold ${
                      transaction.type === "credit"
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}₦
                    {Math.abs(transaction.amount).toLocaleString()}
                  </div>

                  {/* STATUS */}
                  <div>
                    <span
                      className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium inline-flex justify-center w-full ${
                        transaction.status === "Completed"
                          ? "bg-emerald-500 text-white"
                          : transaction.status === "Pending"
                          ? "bg-gray-300 text-gray-700"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          {visibleTransactions < selectedAccount.transactions.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleTransactions((prev) => prev + 7)}
                className="px-6 py-3 bg-purple-900 text-white rounded-lg hover:opacity-90 transition cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};