import { useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export const AddAccountModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [accountName, setAccountName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handleAdd = () => {
    if (!accountName.trim()) {
      toast.error("Account name is required");
      return;
    }

    if (!shortDescription.trim()) {
      toast.error("Short description is required");
      return;
    }

    setStep(2);
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[450px] min-h-[360px] rounded-3xl shadow-2xl px-14 py-10 relative">
        {step === 1 && (
          <>
            <p className="text-[#33B37E] text-3xl sm:text-4xl text-left font-semibold mb-8">
              Add Account
            </p>

            <label htmlFor="accountName" className="block font-medium mb-1">
              Account Name
            </label>

            <input
              type="text"
              id="accountName"
              className="border border-gray-300 rounded-lg py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[#33B37E] w-full placeholder:text-sm"
              placeholder="Enter name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />

            <label
              htmlFor="shortDescription"
              className="block font-medium mb-1 mt-5"
            >
              Short Description
            </label>

            <textarea
              id="shortDescription"
              rows={4}
              className="border border-gray-300 rounded-lg py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[#33B37E] w-full placeholder:text-sm resize-none"
              placeholder="Description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />

            <div className="w-full mt-8 flex flex-col sm:flex-row justify-between gap-4">
              <button
                className="bg-black/20 text-black text-lg py-4 px-12 rounded-lg font-semibold hover:bg-black/30 cursor-pointer w-full sm:w-auto"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                className="bg-[#33B37E] text-white text-lg py-4 px-12 rounded-lg font-semibold hover:bg-[#2a9d6a] cursor-pointer w-full sm:w-auto"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <img src={assets.success} alt="success" />

            <p className="text-center mt-2 text-base font-semibold text-gray-700">
              <span className="font-semibold text-[#33B37E]">
                {accountName}
              </span>{" "}
              has been created successfully!
            </p>

            <div className="w-full mt-8 flex flex-col gap-4">
              <button
                className="bg-black/20 text-black text-lg py-2 rounded-lg font-semibold hover:bg-black/30 cursor-pointer"
                onClick={() => {
                  navigate("/dashboard/accounts");
                }}
              >
                Go Back
              </button>

              <button
                className="bg-[#33B37E] text-white text-lg py-2 rounded-lg font-semibold hover:bg-[#2a9d6a] cursor-pointer"
                onClick={() => {
                  setStep(3);
                }}
              >
                Fund Account
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <p className="text-[#33B37E] text-3xl sm:text-4xl text-left font-semibold mb-8">
              Fund Wallet
            </p>

            <label className="block font-medium mb-1">Payment Method</label>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-between">
              {/* Direct Pay */}
              <div
                onClick={() => setPaymentMethod("bank")}
                className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer bg-white hover:border-gray-400"
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "bank"
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                >
                  {paymentMethod === "bank" && (
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </div>
                <span className="font-medium text-gray-700">Direct Pay</span>
              </div>

              {/* Credit Card */}
              <div
                onClick={() => setPaymentMethod("card")}
                className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer bg-white hover:border-gray-400"
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "card"
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                >
                  {paymentMethod === "card" && (
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </div>

                {/* Text */}
                <span className="font-medium text-gray-700">Credit Card</span>
              </div>
            </div>
            {paymentMethod === "card" && (
              <div className="flex flex-col gap-4 mt-6">
                {/* Amount */}
                <div>
                  <label className="block font-medium mb-1">Amount</label>
                  <input
                    type="number"
                    placeholder="100.00"
                    className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#33B37E]"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="block font-medium mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#33B37E]"
                  />
                </div>

                {/* Card Holder Name */}
                <div>
                  <label className="block font-medium mb-1">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#33B37E]"
                  />
                </div>

                {/* Expiry Date + CVV */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#33B37E]"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block font-medium mb-1">CVV</label>
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#33B37E]"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex gap-4 mt-10 w-full">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-black/20 text-black text-lg hover:bg-black/30 cursor-pointer rounded-lg font-medium transition"
              >
                Cancel
              </button>

              <button
              onClick={() => setStep(4)} 
              className="flex-1 py-3 bg-[#33B37E] text-white rounded-lg font-medium hover:bg-[#2ca06f] transition cursor-pointer">
                Fund
              </button>
            </div>
          </>
        )}
        { step === 4 && (
          <>
          </>
        )}
      </div>
    </div>
  );
};
