import { useState } from "react";
import "./App.css";
import Menu from "./Menu/Menu";
import db from "./db";

function Cart({ menu }) {
  const itemsInCart = Object.entries(menu)
    .filter(([_, value]) => value.inCart > 0)
    .map(([key, value]) => {
      const menuItem = db.menu[key];
      return (
        <li key={key}>
          {menuItem.name}: {value.inCart}
        </li>
      );
    });

  return (
    <div>
      <p>Cart</p>
      <ul> {itemsInCart}</ul>
      <hr />
    </div>
  );
}

function App() {
  console.log(window.location.href);
  const [menu, setMenu] = useState({
    chocolateCupcakes: {
      id: "chocolateCupcakes",
      inCart: 0,
    },
    vanillaCake: {
      id: "vanillaCake",
      inCart: 0,
    },
  });

  function addToCart(id) {
    setMenu((prevMenu) => {
      return {
        ...prevMenu,
        [id]: { ...prevMenu[id], inCart: prevMenu[id].inCart + 1 },
      };
    });
  }

  return (
    <div className="App">
      <Cart menu={menu} />
      <Menu addToCart={addToCart} menu={menu} />
    </div>
  );
}

export default App;
