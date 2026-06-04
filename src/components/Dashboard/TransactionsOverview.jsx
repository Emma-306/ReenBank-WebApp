import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const dummyTransactions = [
  { id: 1, name: "Oluwaben Jaminnnnnnnnnnn", date: "06.Mar.2023", time: "09:39", amount: -100000000 },
  { id: 2, name: "Oluwaben Jamin", date: "06.Mar.2023", time: "09:39", amount: 10000 },
  { id: 3, name: "Oluwaben Jamin", date: "06.Mar.2023", time: "09:39", amount: -10000 },
  { id: 4, name: "Oluwaben Jamin", date: "06.Mar.2023", time: "09:39", amount: 10000 },
  { id: 5, name: "Oluwaben Jamin", date: "06.Mar.2023", time: "09:39", amount: -10000 },
  { id: 6, name: "Oluwaben Jamin", date: "06.Mar.2023", time: "09:39", amount: 10000 },
  { id: 7, name: "Oluwaben Jamin", date: "06.Mar.2023", time: "09:39", amount: -10000 },
];

export const TransactionsOverview = () => {
  const navigate = useNavigate();
  const formatAmount = (amount) => {
    const formatted = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(Math.abs(amount));

    return amount > 0 ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <div className="w-full overflow-hidden flex flex-col min-h-0 max-w-[500px]">
      
      <div className=" pl-3 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2.5">Transactions</h2>
        <img src={assets.arrowRight} alt="arrow" className="w-8 h-8 cursor-pointer" onClick={() => navigate("/dashboard/transactions")} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {dummyTransactions.map((tx) => (
          <div
            key={tx.id}
            className="pl-3 py-4 flex items-center justify-between hover:bg-gray-50 border-b last:border-none border-black/20"
          >
            <div className=" items-center gap-4 hidden 2xl:flex">
              <div className="w-32 flex-shrink-0">
              <p className=" text-gray-500 text-sm truncate">
                {tx.name}
              </p>
            </div>
            </div>
            <p className="text-sm text-gray-500">
                  {tx.date} - {tx.time}
                </p>

            <p
              className={`font-semibold text-base tracking-[-1px] scale-y-125  ${
                tx.amount > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {formatAmount(tx.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};