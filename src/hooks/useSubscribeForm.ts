import { useState } from "react";
import toast from "react-hot-toast";

const useSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("Subscription successful!");
    }, 1500);
  };

  return {
    email,
    setEmail,
    loading,
    handleSubmit,
  };
};

export default useSubscribeForm;
