import sendIcon from "../assets/sendIcon.svg";

import Footer from "./Footer";
import Form from "./Form/Form";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4 md:p-0 w-full">
        <div className="w-[841px] bg-white rounded-[50px] h-[422px] md:h-[505px]">
          <div className="pt-[55px] px-0 md:py-[70px] md:px-[178px] flex flex-col items-center space-y-8">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={sendIcon} className="w-14 h-14" alt="Send icon" />
            </div>

            <h2 className="text-4xl font-bold p-2">SUBSCRIBE</h2>
            <Form />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Newsletter;
