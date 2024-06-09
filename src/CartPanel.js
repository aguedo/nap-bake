import React, { useState } from "react";
import db from "./db";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CartPanel({ updateCart, prodItem }) {
  const [qtyState, setQtyState] = useState("normal");
  const prodDetails = db.menu[prodItem.id];
  function animateQty() {
    setQtyState("animate");
    setTimeout(() => {
      setQtyState("normal");
    }, 200);
  }

  return (
    <div className="text-[#4E342E]">
      <div className="text-sm mb-1">
        <span className="text-xs">$</span>
        <span className="text-2xl">{prodDetails.price}</span>
        <span className="ml-2">
          (Subtotal ${prodDetails.price * prodItem.inCart})
        </span>
      </div>
      <span
        className={classNames(
          "inline-block bg-[#A8E6CF] rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2",
          qtyState === "normal" ? "" : "qty-animate-bounce"
        )}
      >
        Qty: {prodItem.inCart}
      </span>
      <button
        className="bg-[#FFC1CC] hover:bg-[#D48E8E] text-xs font-bold py-1 px-4 rounded-full mr-2"
        onClick={() => {
          updateCart(prodItem.id);
          animateQty();
        }}
      >
        Add to cart
      </button>
      {prodItem.inCart > 0 && (
        <button
          className="bg-[#FF6F61] hover:bg-[#D48E8E] text-[#FFF8E7] text-xs font-extrabold py-1 px-4 rounded-full"
          onClick={() => updateCart(prodItem.id, -1)}
        >
          Remove
        </button>
      )}
    </div>
  );
}
