import { useState } from "react";
import { assets } from "../../../assets/assets";

export const WithdrawModal = ({ onClose, account }) => {
  const [step, setStep] = useState(1);
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[480px] rounded-3xl shadow-2xl px-6 sm:px-10 py-8 sm:py-10 relative">
        {step === 1 && (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-500 text-center mb-8">
              Withdraw
            </h2>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold">Amount</label>
                <input
                  type="text"
                  placeholder="100,000"
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33B37E] placeholder:text-sm cursor-pointer"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Account Number</label>
                <input
                  type="text"
                  placeholder="00 00 00 00 00"
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33B37E] placeholder:text-sm cursor-pointer"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Account Name</label>
                <input
                  type="text"
                  placeholder="Enter account name"
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33B37E] placeholder:text-sm cursor-pointer"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Bank</label>
                <select className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#33B37E] text-sm cursor-pointer">
                  <option className="text-sm">Bank Name</option>
                  <option>GTBank</option>
                  <option>Access Bank</option>
                  <option>UBA</option>
                  <option>Zenith Bank</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={onClose}
                className="w-full sm:w-1/2 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={() => setStep(2)}
                className="w-full sm:w-1/2 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition cursor-pointer"
              >
                Withdraw
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center text-center gap-4">
            <img src={assets.success} alt=""  />

            <span className="text-lg font-semibold text-emerald-500 mb-4">
              Withdrawal Successful!
            </span>

            <button
              onClick={onClose}
              className="w-full font-semibold py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition cursor-pointer"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
