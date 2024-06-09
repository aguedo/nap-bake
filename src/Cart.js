import db from "./db";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

export default function Cart({ menu, updateCart }) {
  const items = Object.entries(menu)
    .filter(([_, value]) => value.inCart > 0)
    .map(([key, value]) => ({
      props: db.menu[key],
      cartItem: value,
    }));
  const itemsCount = items.reduce((a, b) => a + b.cartItem.inCart, 0);
  const subtotal = items.reduce(
    (a, b) => a + b.props.price * b.cartItem.inCart,
    0
  );
  return (
    <div className="mt-6 mb-8 text-[#4E342E]">
      {items.map((item, index) => (
        <div className="max-w-sm w-full md:max-w-full md:flex mb-4" key={index}>
          <div
            className="h-48 md:h-auto md:w-48 flex-none bg-cover rounded-t md:rounded-l md:rounded-r-none text-center overflow-hidden"
            style={{ backgroundImage: "url(" + item.props.img + ")" }}
            title={item.props.name}
          ></div>
          <div className="w-full border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-[#D48E8E] md:border-l-0 md:border-t-[0.5px] md:border-[#D48E8E] bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex ">
                <div className="grow">
                  <Link
                    to={item.props.link}
                    className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF] underline"
                  >
                    {item.props.name}
                  </Link>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Voluptatibus quia, nulla!
                  </p>
                </div>
                <div className="w-20 font-semibold text-center">
                  <p>${item.props.price * item.cartItem.inCart}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <ItemCart updateCart={updateCart} menuItem={item.cartItem} />
            </div>
          </div>
        </div>
      ))}

      <div className="flex">
        <div className="grow"></div>
        <div className="w-auto font-medium text-right pr-4">
          <p>
            Subtotal ({itemsCount} items):{" "}
            <span className="font-semibold">${subtotal}</span>
          </p>
          <button className="mt-2 bg-[#FFC107] hover:bg-[#FFA000] text-[#4E342E] hover:text[#FFF8E7] py-1 px-4 rounded-full">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
