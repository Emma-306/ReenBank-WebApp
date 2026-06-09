import { useState } from "react";
import { assets } from "../../../assets/assets";

export const AccountOverview = ({
  account,
  isActive,
  onClick,
  openModal,
}) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleBalance = (e) => {
    e.stopPropagation(); // prevents card click
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
    <div
      onClick={onClick}
      className="
        relative
        w-full
        min-w-0
        sm:min-w-52
        h-40 sm:h-44 md:h-48
        rounded-xl
        bg-green-400/20
        p-4 sm:p-6 md:p-8
        flex flex-col justify-between
        cursor-pointer
        transition
        hover:scale-[1.02]
      "
    >
      {/* ACTIVE INDICATOR */}
      {isActive && (
        <div className="absolute top-0 left-0 bottom-0 w-2 sm:w-2.5 bg-purple-900 h-full rounded-l-xl" />
      )}

      {/* TOP SECTION */}
      <div className="flex justify-between items-center gap-2">
        <p className="font-medium text-gray-800 text-sm sm:text-base truncate">
          {account.name}
        </p>

        <img
          src={showBalance ? assets.eye : assets.eyeCrossed}
          alt="toggle balance"
          className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer shrink-0"
          onClick={toggleBalance}
        />
      </div>

      {/* BALANCE */}
      <div>
        <p className="text-base sm:text-lg font-bold tracking-tight scale-y-125 sm:scale-y-150 break-words">
          {showBalance
            ? formatBalance(account.balance, account.currency)
            : "XXXXXXXX"}
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-2 sm:gap-3 mt-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            openModal();
          }}
          className="
            flex-1
            bg-emerald-500
            hover:bg-emerald-600
            text-white
            text-xs sm:text-sm
            font-medium
            py-2
            rounded-lg
            transition
          "
        >
          Fund
        </button>

        <button
          onClick={(e) => e.stopPropagation()}
          className="
            flex-1
            bg-gray-300
            border border-gray-200
            hover:bg-gray-400
            text-black
            text-xs sm:text-sm
            font-medium
            py-2
            rounded-lg
            transition
          "
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};