import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Finance from "./components/Finance";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation links */}
       <Nav/>

        {/* Routes definition */}
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/finance" element={<Finance/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
