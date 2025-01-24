import { Toaster } from "react-hot-toast";
import "./App.css";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Newsletter />
      <Toaster />
    </div>
  );
}

export default App;
