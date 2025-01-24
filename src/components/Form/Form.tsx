import SubscribeInput from "./SubscribeInput";
import SubscribeButton from "./SubscribeButton";
import useSubscribeForm from "@/hooks/useSubscribeForm";

const Form = () => {
  const { email, setEmail, loading, handleSubmit } = useSubscribeForm();
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-8 flex flex-col items-center px-8 md:px-0"
      >
        <SubscribeInput email={email} setEmail={setEmail} />
        <SubscribeButton loading={loading} />
      </form>
    </>
  );
};

export default Form;
