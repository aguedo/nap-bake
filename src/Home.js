import BakeMenu from "./Menu/Menu";
import Cart from "./Cart";

export default function Home({ menu, addToCart }) {
  return (
    <div>
      <Cart menu={menu} />
      <BakeMenu addToCart={addToCart} menu={menu} />
    </div>
  );
}
