import React from "react";
import db from "../db";
import { Link } from "react-router-dom";
import chocolateCupcakes1 from "../resources/chocolateCupcakes1.jpeg";
import vanillaCupcakes1 from "../resources/vanillaCupcakes1.jpeg";
import strawberryCake1 from "../resources/strawberryCake1.jpeg";
import vanillaCake1 from "../resources/vanillaCake1.jpeg";

export default function BakeMenu({ addToCart, menu }) {
  const [textFilter, setTextFilter] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  function filterMenu(menuItem) {
    return (
      menuItem.name.toLowerCase().includes(textFilter.trim().toLowerCase()) &&
      (menuItem.category === selectedCategory || selectedCategory === "all")
    );
  }

  return (
    <div>
      {/* <div className="grid lg:grid-rows-1 xs:grid-rows-2 grid-flow-col mt-10 mb-8 gap-4 justify-center"> */}
      <div className="grid-flow-row auto-rows-max mt-6 mb-8 justify-center">
        <input
          type="text"
          value={textFilter}
          onChange={(e) => setTextFilter(e.target.value)}
          placeholder="Search"
          className="w-64 border-2 p-2 rounded-lg mt-2 mr-4 border-[#A8E6CF] text-[#4E342E]"
        />
        <select
          className="w-48 border-2 p-2 rounded-lg mt-2 border-[#A8E6CF] text-[#4E342E] focus:border-[#A8E6CF]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="cupcake">Cupcakes</option>
          <option value="cake">Cakes</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 justify-center gap-4 text-[#4E342E]">
        {filterMenu(db.menu.chocolateCupcakes) && (
          <ChocolateCupcakes addToCart={addToCart} menu={menu} />
        )}
        {filterMenu(db.menu.vanillaCupcakes) && (
          <VanillaCupcakes addToCart={addToCart} menu={menu} />
        )}
        {filterMenu(db.menu.vanillaCake) && (
          <VanillaCake addToCart={addToCart} menu={menu} />
        )}
        {filterMenu(db.menu.strawberryCake) && (
          <StrawberryCake addToCart={addToCart} menu={menu} />
        )}
      </div>
    </div>
  );
}

function ItemCart({ addToCart, menuItem }) {
  return (
    <div className="text-[#4E342E]">
      <span className="inline-block bg-[#A8E6CF] rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
        Qty: {menuItem.inCart}
      </span>
      <button
        className="bg-[#FFC1CC] hover:bg-[#D48E8E] text-xs font-bold py-1 px-4 rounded-full"
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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7]">
      <Link to={details.link}>
        <img className="w-full" src={chocolateCupcakes1} alt={details.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={details.link} className="underline">
            {details.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ItemCart id={menuItem.id} addToCart={addToCart} menuItem={menuItem} />
      </div>
    </div>
  );
}

function VanillaCupcakes({ addToCart, menu }) {
  const menuItem = menu.vanillaCupcakes;
  const details = db.menu.vanillaCupcakes;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7]">
      <Link to={details.link}>
        <img className="w-full" src={vanillaCupcakes1} alt={details.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={details.link} className="underline">
            {details.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ItemCart id={menuItem.id} addToCart={addToCart} menuItem={menuItem} />
      </div>
    </div>
  );
}

function VanillaCake({ addToCart, menu }) {
  const menuItem = menu.vanillaCake;
  const details = db.menu.vanillaCake;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7]">
      <Link to={details.link}>
        <img className="w-full" src={vanillaCake1} alt={details.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={details.link} className="underline">
            {details.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ItemCart id={menuItem.id} addToCart={addToCart} menuItem={menuItem} />
      </div>
    </div>
  );
}

function StrawberryCake({ addToCart, menu }) {
  const menuItem = menu.strawberryCake;
  const details = db.menu.strawberryCake;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7]">
      <Link to={details.link}>
        <img className="w-full" src={strawberryCake1} alt={details.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={details.link} className="underline">
            {details.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <ItemCart id={menuItem.id} addToCart={addToCart} menuItem={menuItem} />
      </div>
    </div>
  );
}
