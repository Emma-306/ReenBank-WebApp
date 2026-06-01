import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export const EmailSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[560px] min-h-[360px] rounded-3xl shadow-2xl p-2 md:p-10 relative">
        <div className="space-y-6 my-10">
          {/* GIF CENTER */}
          <div className="flex justify-center">
            <img src={assets.success} alt="success" className="w-auto h-48" />
          </div>

          {/* TEXT LEFT */}
          <div className="text-center space-y-3">
            <h2 className="text-sm md:text-lg font-semibold text-black/80 ">
              Your account has been created sucessfully!
            </h2>
          </div>

          {/* BUTTON LEFT */}
          <div className="text-left">
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-green-600/80 w-full h-12 text-white hover:bg-green-600 rounded-md font-semibold text-lg cursor-pointer mt-2 md:mt-6"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
