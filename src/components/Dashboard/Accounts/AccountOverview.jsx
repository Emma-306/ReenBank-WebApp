import { useState } from "react";
import { assets } from "../../../assets/assets";

export const AccountOverview = ({ account, isActive, onClick, openModal}) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  const formatBalance = (amount, currency) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency || "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="min-w-64 h-48 rounded-xl bg-green-400/20 p-8 flex flex-col justify-between cursor-pointer relative " onClick={onClick}>
      {isActive && (
        <div className="absolute top-0 left-0 bottom-0 bg-purple-900 h-full w-2.5 "></div>
      )}
      <div className="flex justify-between items-center">
        <p className="font-medium text-gray-800">{account.name}</p>

        <img
          src={showBalance ? assets.eye : assets.eyeCrossed}
          alt="toggle balance"
          className="w-4 h-4 cursor-pointer"
          onClick={toggleBalance}
        />
      </div>

      <div>
        <p className="text-lg font-bold tracking-tight scale-y-150">
          {showBalance
            ? formatBalance(account.balance, account.currency)
            : "XXXXXXXX"}
        </p>
      </div>

      <div className="flex gap-4 mt-2">
        <button
        onClick={openModal} 
        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-lg transition cursor-pointer">
          Fund
        </button>

        <button className="flex-1 bg-gray-300 border border-gray-200 hover:bg-gray-400 text-black text-sm font-medium py-2 rounded-lg transition cursor-pointer">
          Withdraw
        </button>
      </div>
    </div>
  );
};
