import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navbar/Navigation";
import Home from "./Pages/home/Home";
import Product from "./Pages/product/Product";
import ProductDetail from "./Pages/product/ProductDetail";
import Admin from "./Pages/admin/Admin";
import CheckOut from "./Pages/checkout/CheckOut";
import NoMatch from "./Pages/noMatch/NoMatch";
import SideCart from "./cart/SideCart";
import { useCallback, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  },[cartItems])

  // fetch data from api
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // const data_with_cart_status = data.map((item) => ({...item, inCart:false}))
        setProductsList(data);
        setFilteredProducts(data)
      } catch (error) {
        console.error("Unable to fetch data");
      }
    };
    fetchProductsData();
  }, []);

  useEffect(() => {
    const cartItemsCount = cartItems.length;
    setCartItemsCount(cartItemsCount);
  }, [cartItems]);

  const handleCart = () => {
    setCartOpen((prevValue) => !prevValue);
  };

  const onCartChange = useCallback(arr => {
    setCartItems(arr)
  }, [cartItems])

  return (
    <div className="relative">
      <Navigation handleCart={handleCart} cartItemsCount={cartItemsCount} />
      <div className="h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin productsList={productsList}/>}></Route>
          <Route
            path="/product"
            element={
              <Product
                cartItems={cartItems}
                productsList={productsList}
                setProductsList={setProductsList}
                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
                setCartItems={setCartItems}
              />
            }
          ></Route>
          <Route path="/product/:id" element={<ProductDetail productsList={productsList}/>}></Route>
          <Route path="/checkout" element={<CheckOut/>}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </div>

      {cartOpen && (
        <div className="fixed z-10 w-1/4 bg-gray-100 h-[100vh] top-0 right-0 flex">
          <SideCart
            handleCart={handleCart}
            cartItems={cartItems}
            cartItemsCount={cartItemsCount}
            setCartItems={setCartItems}
            setCartItemsCount={setCartItemsCount}

            onCartChange={(arr) => {
              onCartChange(arr)
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
