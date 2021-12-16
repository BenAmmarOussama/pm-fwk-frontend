import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
            
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
