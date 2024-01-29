import { BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Signup />
        <Signin/>
      </div>
    </BrowserRouter>
  );
}

export default App;
