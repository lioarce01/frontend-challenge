import { Loader2 } from "lucide-react";
import React from "react";

interface SubscribeButtonProps {
  loading: boolean;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ loading }) => {
  return (
    <div className="w-[205px] h-[39px] flex items-center justify-center">
      <button
        disabled={loading}
        type="submit"
        className={` bg-[#E6FC15] hover:bg-[#e8fd2a] text-black rounded-[55px] font-bold w-full h-full px-6 mt-12 transition duration-300 cursor-pointer disabled:bg-neutral-400 disabled:cursor-not-allowed`}
      >
        {loading ? <Loader2 className="animate-spin w-full" /> : "SUBSCRIBE"}
      </button>
    </div>
  );
};

export default SubscribeButton;
