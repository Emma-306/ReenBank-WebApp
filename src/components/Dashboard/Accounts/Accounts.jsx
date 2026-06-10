import { useEffect, useState } from "react";
import { AccountOverview } from "./AccountOverview";
import { AddAccountModal } from "../AddAccountModal";
import { useNavigate } from "react-router-dom";
import { WithdrawModal } from "./WithdrawModal";
import { AccountOverviewSkeleton } from "../Skeletons/AccountsSkeleton/AccountOverviewSkeleton";
import { AddAccountSkeleton } from "../Skeletons/AccountsSkeleton/AddAccountSkeleton";
import { TransactionsHeaderSkeleton } from "../Skeletons/AccountsSkeleton/TransactionsHeaderSkeleton";
import { TransactionsListSkeleton } from "../Skeletons/AccountsSkeleton/TransactionsListSkeleton";

export const Accounts = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const [activeAccountId, setActiveAccountId] = useState(null);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [modalStartStep, setModalStartStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const selectedAccount = accounts.find(
    (account) => account.id === selectedAccountId,
  );

  const openModal = (step = 1) => {
    setModalStartStep(step);
    setShowAddAccountModal(true);
  };

  const openWithdrawModal = (accountId) => {
    setSelectedAccountId(accountId);
    setShowWithdrawModal(true);
  };

  const closeWithdrawModal = () => {
    setShowWithdrawModal(false);
  };

  const closeModal = () => setShowAddAccountModal(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);

        const res = await fetch("/db.json");
        const data = await res.json();

        setAccounts(data.accounts);

        if (data.accounts?.length > 0) {
          setActiveAccountId(data.accounts[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch accounts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const activeAccount = accounts.find(
    (account) => account.id === activeAccountId,
  );

  return (
    <>
      <div className="w-full px-3 sm:px-5">
        {/* ACCOUNT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {loading ? (
            <AccountOverviewSkeleton />
          ) : (
            accounts.map((account) => (
              <AccountOverview
                key={account.id}
                account={account}
                isActive={account.id === activeAccountId}
                onClick={() => setActiveAccountId(account.id)}
                openModal={() => openModal(3)}
                openWithdrawModal={() => openWithdrawModal(account.id)}
              />
            ))
          )}

          {/* ADD ACCOUNT */}
          {loading ? (
            <AddAccountSkeleton />
          ) : (
            <div
              onClick={() => openModal(1)}
              className="
                group
                w-full
                h-40 sm:h-48
                bg-gray-100
                hover:bg-emerald-500
                transition-colors duration-300
                rounded-xl
                p-5 sm:p-8
                cursor-pointer
                flex flex-col justify-between
                text-black hover:text-white
              "
            >
              <div className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>

                <span className="font-semibold">Add Account</span>
              </div>

              <span className="text-xl font-bold">₦ 00,000.00</span>
            </div>
          )}
        </div>

        {/* TRANSACTIONS */}
        {activeAccount && (
          <div className="mt-12 ">
            {loading ? (
              <TransactionsHeaderSkeleton />
            ) : (
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Transactions</h2>

                <button
                  onClick={() => navigate("/dashboard/transactions")}
                  className="text-emerald-500 font-medium flex items-center gap-2 cursor-pointer"
                >
                  View All <span>→</span>
                </button>
              </div>
            )}

            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                {loading ? (
                  <TransactionsListSkeleton />
                ) : (
                  <div className="space-y-2 min-w-[850px] sm:min-w-0">
                    {activeAccount.transactions
                      .slice(-6)
                      .reverse()
                      .map((transaction, index) => (
                        <div
                          key={transaction.id}
                          className={`grid grid-cols-[60px_180px_150px_180px_120px_150px] xl:grid-cols-[60px_1.5fr_1fr_1.5fr_1fr_160px]  items-center gap-2 xl:gap-4 py-2
                      ${
                        index !==
                        activeAccount.transactions.slice(0, 6).length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    `}
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
                          <div className="text-gray-600">
                            {transaction.name}
                          </div>

                          {/* METHOD */}
                          <div className="text-gray-500 capitalize">
                            {transaction.method.replace("_", " ")}
                          </div>

                          {/* DATE */}
                          <div className="text-gray-500">
                            {transaction.date}
                          </div>

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
                              className={`
                          px-4 sm:px-5
                          py-1.5 sm:py-2
                          rounded-md
                          text-xs sm:text-sm
                          font-medium
                          inline-flex
                          justify-center
                          w-full
                          ${
                            transaction.status === "Completed"
                              ? "bg-emerald-500 text-white"
                              : transaction.status === "Pending"
                                ? "bg-gray-300 text-gray-700"
                                : "bg-red-500 text-white"
                          }
                        `}
                            >
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {showAddAccountModal && (
        <AddAccountModal
          onClose={closeModal}
          startStep={modalStartStep}
          account={accounts}
        />
      )}
      {showWithdrawModal && (
        <WithdrawModal account={selectedAccount} onClose={closeWithdrawModal} />
      )}
    </>
  );
};