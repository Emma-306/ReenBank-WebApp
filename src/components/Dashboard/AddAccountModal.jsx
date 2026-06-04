import { useState } from "react";

export const AddAccountModal = ({ onClose }) => {
  const [step, setStep] = useState(1);

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
            />

            <div className="w-full mt-8 flex flex-col sm:flex-row justify-between gap-4">
              <button
                className="bg-black/20 text-black text-lg py-4 px-12 rounded-lg font-semibold hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[#33B37E] cursor-pointer w-full sm:w-auto"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                className="bg-[#33B37E] text-white text-lg py-4 px-12 rounded-lg font-semibold hover:bg-[#2a9d6a] focus:outline-none focus:ring-2 focus:ring-[#33B37E] cursor-pointer w-full sm:w-auto"
                onClick={() => setStep(2)}
              >
                Add
              </button>
            </div>
          </>
        )}

        {step === 2 && <>{/* Step 2 content goes here */}</>}
      </div>
    </div>
  );
};
