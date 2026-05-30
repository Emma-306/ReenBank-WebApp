import { assets } from '../assets/assets';

export const AuthLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen w-screen bg-repeat flex items-center justify-center"
      style={{
  backgroundImage: `url(${assets.bankingTheme})`,
  backgroundSize: "800px 500px",
  backgroundRepeat: "repeat",
}}
    >
      {children}
    </div>
  );
};