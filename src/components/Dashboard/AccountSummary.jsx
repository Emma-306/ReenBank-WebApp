export const AccountSummary = ({ name, balance, showBalance }) => {
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
      .format(value)
      .replace("NGN", "₦");

  return (
    <div className="w-full max-w-[200px] 2xl:w-48 flex flex-col items-center justify-center p-4 md:p-6 2xl:py-12 2xl:px-4 rounded-lg bg-green-400/20 shadow">
      <span className="text-xs sm:text-sm whitespace-nowrap font-medium text-purple-900 mb-1">
        {name}
      </span>

      <span className="text-lg sm:text-xl md:text-2xl 2xl:text-xl font-bold -tracking-[1px] leading-none 2xl:scale-y-150">
        {showBalance ? "XXXXXXXX" : formatCurrency(balance)}
      </span>
    </div>
  );
};
