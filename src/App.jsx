import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Header from "./Components/Header";
import Help from "./Components/Help";

// lazy loaded components
const ProductList = lazy(() => import("./Components/ProductList"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));
const Cart = lazy(() => import("./Components/Cart"));
const Checkout = lazy(() => import("./Components/Checkout"));
const NotFound = lazy(() => import("./Components/NotFound"));

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />

      <Suspense fallback={
        <div className="text-center mt-20 text-xl"> Loading page... </div>
        }
      >
        <Routes>
          <Route path="/" element={<ProductList searchText={searchText} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

