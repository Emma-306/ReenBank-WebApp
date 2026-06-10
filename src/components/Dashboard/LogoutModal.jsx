import { useNavigate } from "react-router-dom";

export const LogoutModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[470px] rounded-[24px] px-6 sm:px-10 md:px-14 py-8 sm:py-10 md:py-12 shadow-xl">
        <h2 className="text-center text-lg sm:text-xl font-medium text-gray-700">
          Are you sure you want to Logout?
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8 sm:mt-12">
          <button
            onClick={onClose}
            className="w-full sm:flex-1 h-12 sm:h-14 bg-gray-300 text-gray-700 rounded-xl font-semibold text-base sm:text-lg cursor-pointer transition hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onClose();
              navigate("/auth");
            }}
            className="w-full sm:flex-1 h-12 sm:h-14 bg-emerald-500 text-white rounded-xl font-semibold text-base sm:text-lg cursor-pointer transition hover:bg-emerald-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};