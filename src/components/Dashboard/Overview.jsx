import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { AccountSummary } from "./AccountSummary";

export const Overview = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [accountSummary, setAccountSummary] = useState(null);

  useEffect(() => {
    const fetchAccountSummary = async () => {
      try {
        const res = await fetch("http://localhost:3000/accountSummary");
        const data = await res.json();
        setAccountSummary(data);
      } catch (error) {
        console.error("Failed to fetch account summary:", error);
      }
    };

    fetchAccountSummary();
  }, []);

  const income = accountSummary?.summary?.totalIncome || 0;
  const expense = accountSummary?.summary?.totalExpense || 0;
  const balance =
    accountSummary?.summary?.totalBalance || income - expense;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  const formattedBalance = formatCurrency(balance);
  const formattedIncome = formatCurrency(income);
  const formattedExpense = formatCurrency(expense);

  return (
    <div className="flex flex-col xl:flex-row w-full min-h-full gap-6 xl:gap-12 2xl:gap-16 px-3 sm:px-2 xl:px-6">
      
      {/* LEFT SECTION */}
      <div className="flex-1 xl:flex-[3] flex flex-col">
        
        {/* HEADER */}
        <div className="flex flex-row justify-between items-center gap-4">
          <p className="font-semibold text-lg sm:text-xl 2xl:text-2xl block">
            Current Account Balance
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* EYE BUTTON */}
            <button
              onClick={() => setShowBalance((prev) => !prev)}
              className="p-2.5 bg-gray-200/80 rounded-lg hover:bg-gray-300 transition cursor-pointer"
            >
              <img
                src={showBalance ? assets.eye : assets.eyeCrossed}
                alt="toggle balance"
                className="w-5 h-5"
              />
            </button>

            {/* DATE PICKER */}
            <button className="hidden xl:flex items-center gap-2 bg-gray-200/80 rounded-lg hover:bg-gray-300 transition px-3 py-2.5 text-xs sm:text-sm cursor-pointer">
              <img
                src={assets.calendar}
                alt=""
                className="w-4 h-4"
              />

              <span className="text-gray-700 font-medium whitespace-nowrap hidden sm:block">
                Feb 22 - Mar 21, 2023
              </span>

              <img
                src={assets.arrowDown}
                alt=""
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* BALANCE CARD */}
        <div className="w-full bg-green-400/20 mt-5 rounded-xl px-4 sm:px-6 py-12 2xl:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
            
            <img
              src={assets.logoGreen}
              alt="logo"
              className="hidden 2xl:block w-12 h-12 object-contain"
            />

            <div className="grid grid-cols-3 gap-6 w-full">
              
              {/* BALANCE */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium text-purple-900">
                  Current Balance
                </span>

                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight scale-y-150">
                  {showBalance ? "XXXXXXXX" : formattedBalance}
                </span>
              </div>

              {/* INCOME */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium text-purple-900 ">
                  Income
                </span>

                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight scale-y-150">
                  {showBalance ? "XXXXXXXX" : formattedIncome}
                </span>
              </div>

              {/* EXPENSE */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium text-purple-900">
                  Expense
                </span>

                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight scale-y-150">
                  {showBalance ? "XXXXXXXX" : formattedExpense}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ACCOUNTS HEADER */}
        <div className="flex justify-between items-center mt-10">
          <p className="font-semibold text-xl sm:text-2xl">
            Accounts
          </p>

          <button className="p-3 bg-gray-200/80 rounded-lg hover:bg-gray-300 transition cursor-pointer">
            <img
              src={assets.plus}
              alt="add account"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>

        {/* ACCOUNTS */}
        <div className="w-full mt-3 flex flex-wrap gap-4 xl:gap-7 justify-start 2xl:justify-between">
          {accountSummary?.accounts?.map((account) => (
            <AccountSummary
              key={account.id}
              name={account.name}
              balance={account.balance}
              currency={account.currency}
              showBalance={showBalance}
            />
          ))}
        </div>
        <div className="w-full mt-12 flex justify-between">
           <p className="font-semibold text-xl sm:text-2xl">
            Statistics
          </p>
          <button className="p-3 bg-gray-200/80 rounded-lg hover:bg-gray-300 transition cursor-pointer flex flex-row items-center">
            <p className="text-gray-700 font-medium whitespace-nowrap mr-3 text-xs">This Month</p>
            <img
                src={assets.arrowDown}
                alt=""
                className="w-4 h-4"
              />
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden xl:block xl:flex-2 bg-amber-800 rounded-xl min-h-125" />
    </div>
  );
};