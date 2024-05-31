import db from "./db";
// import { ButterCookies } from "./Menu/ButterCookies";

export default function Cart({ menu, updateCart }) {
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

      {/* <ButterCookies updateCart={updateCart} menu={menu} /> */}
    </div>
  );
}
