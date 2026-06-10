import { useState, useEffect } from "react";
import { assets } from "../../../assets/assets";
import { TransactionsOverview } from "../TransactionsOverview";
import { ResetPasswordModal } from "../../AuthLayout/ResetPasswordModal";
import { ProfileLeftSkeleton } from "../Skeletons/ProfileSkeleton/ProfileLeftSkeleton";
import { TransactionsOverviewSkeleton } from "../Skeletons/TransactionsOverviewSkeleton";

export const Profile = () => {
  const [accounts, setAccounts] = useState([]);
  const [activeAccountId, setActiveAccountId] = useState(null);
  const [showBalance, setShowBalance] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const selectedAccount = accounts.find(
    (account) => account.id === activeAccountId,
  );

  const formattedBalance = selectedAccount
    ? selectedAccount.balance.toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);

      try {
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
  return (
    <>
      <div className="flex flex-col xl:flex-row w-full h-full gap-6 xl:gap-12 2xl:gap-16 px-3 sm:px-2 xl:px-6">
        {/* LEFT SECTION */}
        {loading ? (
          <ProfileLeftSkeleton />
        ) : (
          <div className="flex-1 xl:flex-[3] flex justify-center items-center">
            <div className="w-full max-w-[500px] bg-white rounded-3xl shadow-sm px-10 py-8 flex flex-col items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
                  alt=""
                  className="w-28 h-28 rounded-full object-cover"
                />

                <button className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                  ✎
                </button>
              </div>

              <h2 className="mt-5 text-3xl font-semibold text-gray-900">
                Maureen Oguche
              </h2>

              <span className="mt-3 px-4 py-1 bg-purple-100 text-purple-700 rounded-md text-sm font-medium">
                Pro User
              </span>

              <div className="w-full mt-8 space-y-6">
                <div>
                  <p className="text-sm text-emerald-500 font-medium">Email</p>

                  <p className="text-xl font-semibold mt-2 text-gray-900 break-all">
                    oguchemaureenm@gmail.com
                  </p>

                  <div className="h-px bg-gray-200 mt-5" />
                </div>

                <div>
                  <p className="text-sm text-emerald-500 font-medium">
                    Phone Number
                  </p>

                  <p className="text-xl font-semibold mt-2 text-gray-900">
                    +234 803 041 1314
                  </p>

                  <div className="h-px bg-gray-200 mt-5" />
                </div>

                <div>
                  <p className="text-sm text-emerald-500 font-medium">Gender</p>

                  <p className="text-xl font-semibold mt-2 text-gray-900">
                    Female
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowResetPasswordModal(true)}
                className="mt-8 w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl cursor-pointer transition"
              >
                Reset Password
              </button>
            </div>
          </div>
        )}

        {/* RIGHT SECTION */}
        <div className="hidden xl:flex xl:flex-[2] min-h-125 flex-col justify-between mb-12 pl-3">
          {loading ? (
            <div className="bg-green-400/20 rounded-2xl p-6 animate-pulse min-h-[120px]">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {/* Account name */}
                  <div className="h-4 w-32 bg-green-300/40 rounded" />

                  {/* Balance */}
                  <div className="h-10 w-56 bg-green-300/40 rounded mt-4" />
                </div>

                {/* Eye icon */}
                <div className="w-5 h-5 bg-green-300/40 rounded-full" />
              </div>
            </div>
          ) : (
            <div className="bg-green-400/20 rounded-2xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-purple-900 font-medium">
                    {selectedAccount?.name || "Main Account"}
                  </p>

                  <h2 className="text-2xl font-bold mt-2 text-gray-900 tracking-tight scale-y-150">
                    {showBalance ? "XXXXXXXXXX" :  `₦ ${formattedBalance}`}
                  </h2>
                </div>

                <button onClick={() => setShowBalance((prev) => !prev)}>
                  <img
                    src={showBalance ? assets.eye : assets.eyeCrossed}
                    alt="toggle balance"
                    className="w-5 h-5 opacity-70 cursor-pointer"
                  />
                </button>
              </div>
            </div>
          )}
          {loading ? (
            <TransactionsOverviewSkeleton />
          ) : (
            <TransactionsOverview />
          )}
        </div>
      </div>
      {showResetPasswordModal && (
        <ResetPasswordModal onClose={() => setShowResetPasswordModal(false)} />
      )}
    </>
  );
};
