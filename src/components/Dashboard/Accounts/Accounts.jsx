import { useEffect, useState } from "react";
import { AccountOverview } from "./AccountOverview";
import { AddAccountModal } from "../AddAccountModal";

export const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [activeAccountId, setActiveAccountId] = useState(null);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [modalStartStep, setModalStartStep] = useState(1);
  

  const openModal = (step = 1) => {
    setModalStartStep(step);
    setShowAddAccountModal(true);
  };

  const closeModal = () => setShowAddAccountModal(false);
  useEffect(() => {
    const fetchAccounts = async () => {
      const res = await fetch("http://localhost:3000/accounts");
      const data = await res.json();

      setAccounts(data);

      if (data.length > 0) {
        setActiveAccountId(data[0].id);
      }
    };

    fetchAccounts();
  }, []);



  const activeAccount = accounts.find((acc) => acc.id === activeAccountId);

  return (
    <>
      <div className="w-full flex justify-between items-start gap-12 px-5">
        <div className="flex-1 grid grid-cols-3 gap-12">
          {accounts.map((account) => (
            <AccountOverview
              key={account.id}
              account={account}
              isActive={account.id === activeAccountId}
              onClick={() => setActiveAccountId(account.id)}
              openModal={()=> openModal(3)}
            />
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div
        onClick={() => openModal(1)} 
        className="group w-64 h-48 bg-gray-100 hover:bg-emerald-500 transition-colors duration-300 shrink-0 rounded-xl p-8 cursor-pointer justify-between flex flex-col text-black hover:text-white">
          <div className="flex flex-row justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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

            <span className="font-semibold">Add account</span>
          </div>

          <span className="text-xl font-bold tracking-tight scale-y-150">
            ₦ 00,000.00
          </span>
        </div>
      </div>
      {showAddAccountModal && (
        
        <AddAccountModal
          onClose={closeModal}
          startStep={modalStartStep}
          account={accounts}
        />
      )}
    </>
  );
};
