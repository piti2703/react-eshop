import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import Cart from "./pages/Cart/Cart";
import OrderForm from "./pages/OrderForm/OrderForm";
import NotFound from "./pages/NotFound.js/NotFound";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products/:itemId' element={<ItemDetails />} />
          <Route path='/order-form' element={<OrderForm />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order-details' element={<OrderDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
