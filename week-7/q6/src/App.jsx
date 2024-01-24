import NumberComponent from "./components/NumberComponent";
import OtpComponent from "./components/OtpComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col justify-around items-center min-h-56 w-96  rounded-lg border-2 border-[#dbdbdb] bg-[#121212]">
      <div className="text-[#dbdbdb] text-3xl">Login Via OTP</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NumberComponent />} />
          <Route path="/login" element={<OtpComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
