import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Store from "../screens/Store";
import ProductDetail from "../screens/ProductDetail";
import Account from "../screens/Account";
import Checkout from "../screens/Checkout";
import Cart from "../screens/Cart";
import Contact from "../screens/Contact";
import Errorpage from "../screens/Errorpage";
import Favorite from "../screens/Favorite";
const RouterLink = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />}/>
        <Route path="/products/:Id" element={<ProductDetail />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path="*" element={<Errorpage />}/>
      </Routes>
      <Footer />
    </Router>
  );
};
export default RouterLink;
