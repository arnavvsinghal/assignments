import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Signup />
        <Signin />
        <Dashboard/>
        <SendMoney/>
      </div>
    </BrowserRouter>
  );
}

export default App;
