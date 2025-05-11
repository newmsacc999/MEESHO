import './App.css';
import 'swiper/css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Main';
import Header from './component/Header/Main';
import Footer from './component/Footer/Main';
import Address from './component/Address/Main';
import Checkout from './component/Checkout/Main';
import ProductDetails from './component/ProdutctDetails/Main';
import Cart from './component/Cart/Main';
import Payment from './component/Payment/Main';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
