import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { AccountSummary } from "./AccountSummary";
import { TransactionsOverview } from "./TransactionsOverview";

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
  const balance = accountSummary?.summary?.totalBalance || income - expense;

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
              <img src={assets.calendar} alt="" className="w-4 h-4" />

              <span className="text-gray-700 font-medium whitespace-nowrap hidden 2xl:block">
                Feb 22 - Mar 21, 2023
              </span>

              <img src={assets.arrowDown} alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* BALANCE CARD */}
        <div className="w-full bg-green-400/20 mt-5 rounded-xl px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
            <img
              src={assets.logoGreen}
              alt="logo"
              className="hidden 2xl:block w-12 h-12 object-contain"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {/* BALANCE */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium mb-2 text-purple-900">
                  Current Balance
                </span>

                <span className="text-lg font-bold tracking-tight scale-y-150">
                  {showBalance ? "XXXXXXXX" : formattedBalance}
                </span>
              </div>

              {/* INCOME */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium mb-2 text-purple-900 ">
                  Income
                </span>

                <span className="text-lg font-bold tracking-tight scale-y-150">
                  {showBalance ? "XXXXXXXX" : formattedIncome}
                </span>
              </div>

              {/* EXPENSE */}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium mb-2 text-purple-900">
                  Expense
                </span>

                <span className="text-lg font-bold tracking-tight scale-y-150">
                  {showBalance ? "XXXXXXXX" : formattedExpense}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ACCOUNTS HEADER */}
        <div className="flex justify-between items-center mt-10">
          <p className="font-semibold text-xl sm:text-2xl">Accounts</p>

          <button className="p-3 bg-gray-200/80 rounded-lg hover:bg-gray-300 transition cursor-pointer">
            <img
              src={assets.plus}
              alt="add account"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </button>
        </div>

        {/* ACCOUNTS */}
        <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10 max-w-6xl">
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
        <div className="w-full mt-12 flex justify-between mb-4">
          <p className="font-semibold text-xl sm:text-2xl">Statistics</p>
          <button className="p-3 bg-gray-200/80 rounded-lg hover:bg-gray-300 transition cursor-pointer flex flex-row items-center">
            <p className="text-gray-700 font-medium whitespace-nowrap mr-3 text-xs">
              This Month
            </p>
            <img src={assets.arrowDown} alt="" className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-4 sm:gap-8 w-full mb-6">
          <img
            src={assets.logoGreen}
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12"
          />

          <p className="w-16 sm:w-20 text-lg sm:text-xl font-medium">Income</p>

          <div className="flex-1 h-3 sm:h-4 rounded overflow-hidden">
            <div
              className="h-full bg-green-500 rounded transition-all"
              style={{
                width: `${Math.min((income / 700000) * 100, 100)}%`,
              }}
            />
          </div>

          <p className="w-28 sm:w-36 shrink-0 text-right font-semibold text-lg sm:text-xl whitespace-nowrap">
            {formattedIncome}
          </p>
        </div>
        <div className="flex items-center gap-4 sm:gap-8 w-full">
          <img
            src={assets.logoRed}
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12"
          />

          <p className="w-16 sm:w-20 text-lg sm:text-xl font-medium">Expense</p>

          <div className="flex-1 h-3 sm:h-4 rounded overflow-hidden">
            <div
              className="h-full bg-red-500 rounded transition-all"
              style={{
                width: `${Math.min((expense / 500000) * 100, 100)}%`,
              }}
            />
          </div>

          <p className="w-28 sm:w-36 shrink-0 text-right font-semibold text-lg sm:text-xl whitespace-nowrap">
            {formattedExpense}
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden xl:flex xl:flex-[2] min-h-125 flex-col justify-between mb-12">
        <TransactionsOverview />
        <div style={{ backgroundImage: `url(${assets.bgImage3})` }} className="w-full h-44 rounded-2xl bg-cover ml-2 flex justify-between flex-col px-6 py-4">
          <img src={assets.arrowRightWhite} alt=""  className="w-10 h-10" />
          <div className="flex flex-col text-white">
              <span className="font-semibold text-2xl">Upgrade to PRO</span>
              <span className="text-sm">Sign in on more than one device</span>
          </div>
        </div>
      </div>
    </div>
  );
};
