import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import "./App.css";
import BakeMenu from "./Menu/Menu";
import Home from "./Home";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import VanillaCake from "./Details/VanillaCake";
import ChocolateCupcakes from "./Details/ChocolateCupcakes";

export default function App() {
  const [menu, setMenu] = useState({
    chocolateCupcakes: {
      id: "chocolateCupcakes",
      inCart: 0,
    },
    vanillaCupcakes: {
      id: "vanillaCupcakes",
      inCart: 0,
    },
    vanillaCake: {
      id: "vanillaCake",
      inCart: 0,
    },
    strawberryCake: {
      id: "strawberryCake",
      inCart: 0,
    },
    chocolateCake: {
      id: "chocolateCake",
      inCart: 0,
    },
    butterCookies: {
      id: "butterCookies",
      inCart: 0,
    },
    guavaPastries: {
      id: "guavaPastries",
      inCart: 0,
    },
    napoleons: {
      id: "napoleons",
      inCart: 0,
    },
  });

  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phone: "",
    address: "",
    deliveryDate: "",
  });

  const [order, setOrder] = useState({});

  function updateCart(id, quantity = 1) {
    setMenu((prevMenu) => {
      return {
        ...prevMenu,
        [id]: {
          ...prevMenu[id],
          inCart: Math.max(prevMenu[id].inCart + quantity, 0),
        },
      };
    });
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout menu={menu} />}>
          <Route index element={<BakeMenu updateCart={updateCart} menu={menu} />} />
          <Route
            exact
            path="/menu"
            element={<BakeMenu updateCart={updateCart} menu={menu} />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart menu={menu} updateCart={updateCart} />}
          />
          <Route
            exact
            path="/checkout"
            element={
              <Checkout
                menu={menu}
                setMenu={setMenu}
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                setOrder={setOrder}
              />
            }
          />
          <Route
            exact
            path="/checkout/confirmation"
            element={<Confirmation order={order} />}
          />
          <Route exact path="/menu/vanillacake" element={<VanillaCake />} />
          <Route
            exact
            path="/menu/chocolatecupcakes"
            element={<ChocolateCupcakes />}
          />

          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
