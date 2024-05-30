import db from "./db";

export default function Cart({ menu }) {
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
