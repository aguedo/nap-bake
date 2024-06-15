import React from "react";
import db from "../db";
import { Link } from "react-router-dom";
import CartPanel from "../CartPanel";

export default function BakeMenu({ updateCart, menu }) {
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
      <div className="grid-flow-row auto-rows-max mt-6 mb-8 justify-center">
        <input
          type="text"
          value={textFilter}
          onChange={(e) => setTextFilter(e.target.value)}
          placeholder="Search"
          className="w-64 border-2 p-2 rounded-lg mt-2 mr-4 border-[#A8E6CF] text-[#4E342E] focus:outline-none focus:border-[#D48E8E]"
        />
        <select
          className="w-48 border-2 p-2 rounded-lg mt-2 border-[#A8E6CF] text-[#4E342E] focus:outline-none focus:border-[#D48E8E]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="cupcake">Cupcakes</option>
          <option value="cake">Cakes</option>
          <option value="cookie">Cookies</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 justify-center gap-4 text-[#4E342E]">
        {filterMenu(db.menu.chocolateCupcakes) && (
          <ChocolateCupcakes updateCart={updateCart} menu={menu} />
        )}
        {filterMenu(db.menu.vanillaCupcakes) && (
          <VanillaCupcakes updateCart={updateCart} menu={menu} />
        )}
        {filterMenu(db.menu.guavaPastries) && (
          <GuavaPastries updateCart={updateCart} menu={menu} />
        )}
        {filterMenu(db.menu.napoleons) && (
          <Napoleons updateCart={updateCart} menu={menu} />
        )}
        {filterMenu(db.menu.vanillaCake) && (
          <VanillaCake updateCart={updateCart} menu={menu} />
        )}
        {filterMenu(db.menu.strawberryCake) && (
          <StrawberryCake updateCart={updateCart} menu={menu} />
        )}
        {filterMenu(db.menu.chocolateCake) && (
          <ChocolateCake updateCart={updateCart} menu={menu} />
        )}
        {filterMenu(db.menu.butterCookies) && (
          <ButterCookies updateCart={updateCart} menu={menu} />
        )}
      </div>
    </div>
  );
}

export function ButterCookies({ updateCart, menu }) {
  const prodItem = menu.butterCookies;
  const prodDetails = db.menu.butterCookies;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}

function ChocolateCake({ updateCart, menu }) {
  const prodItem = menu.chocolateCake;
  const prodDetails = db.menu.chocolateCake;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}

function ChocolateCupcakes({ updateCart, menu }) {
  const prodItem = menu.chocolateCupcakes;
  const prodDetails = db.menu.chocolateCupcakes;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}

function GuavaPastries({ updateCart, menu }) {
  const prodItem = menu.guavaPastries;
  const prodDetails = db.menu.guavaPastries;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}

function Napoleons({ updateCart, menu }) {
  const prodItem = menu.napoleons;
  const prodDetails = db.menu.napoleons;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}

function StrawberryCake({ updateCart, menu }) {
  const prodItem = menu.strawberryCake;
  const prodDetails = db.menu.strawberryCake;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}

function VanillaCake({ updateCart, menu }) {
  const prodItem = menu.vanillaCake;
  const prodDetails = db.menu.vanillaCake;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}

function VanillaCupcakes({ updateCart, menu }) {
  const prodItem = menu.vanillaCupcakes;
  const prodDetails = db.menu.vanillaCupcakes;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#FFF8E7] pb-2">
      <Link to={prodDetails.link}>
        <img className="w-full" src={prodDetails.img} alt={prodDetails.name} />
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#D48E8E] hover:text-[#A8E6CF]">
          <Link to={prodDetails.link} className="underline">
            {prodDetails.name}
          </Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <CartPanel updateCart={updateCart} prodItem={prodItem} />
      </div>
    </div>
  );
}
