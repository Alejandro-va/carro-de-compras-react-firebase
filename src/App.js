import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPag from "./components/CheckoutPag";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout-page" element={<CheckoutPag />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
