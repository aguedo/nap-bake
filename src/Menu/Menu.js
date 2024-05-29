import db from "../db";

function ItemCart({ addToCart, menuItem }) {
  return (
    <div>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
        Qty: {menuItem.inCart}
      </span>
      <button
        className="bg-yellow-300 hover:bg-yellow-400 text-xs font-bold py-1 px-4 rounded-full"
        onClick={() => addToCart(menuItem.id)}
      >
        Add to cart
      </button>
    </div>
  );
}

function ChocolateCupcakes({ addToCart, menu }) {
  const menuItem = menu.chocolateCupcakes;
  const details = db.menu.chocolateCupcakes;
  return (
    <div className="bg-red-50">
      <p>{details.name}</p>
      <ItemCart id={menuItem.id} addToCart={addToCart} menuItem={menuItem} />
    </div>
  );
}

function VanillaCake({ addToCart, menu }) {
  const menuItem = menu.vanillaCake;
  const details = db.menu.vanillaCake;
  return (
    <div className="bg-blue-50">
      <p>{details.name}</p>
      <ItemCart id={menuItem.id} addToCart={addToCart} menuItem={menuItem} />
    </div>
  );
}

function Menu({ addToCart, menu }) {
  return (
    <div>
      <hr />
      <p>Menu</p>
      <ChocolateCupcakes addToCart={addToCart} menu={menu} />
      <VanillaCake addToCart={addToCart} menu={menu} />
    </div>
  );
}

export default Menu;
