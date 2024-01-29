import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Signup />
        <Signin />
        <Dashboard/>
      </div>
    </BrowserRouter>
  );
}

export default App;
