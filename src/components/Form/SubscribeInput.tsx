import React from "react";

interface SubscribeInputProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const SubscribeInput: React.FC<SubscribeInputProps> = ({ email, setEmail }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border-b-2 border-neutral-300 rounded-none pb-4 text-left focus:outline-none focus:border-neutral-400 transition duration-300"
      />
    </>
  );
};

export default SubscribeInput;
