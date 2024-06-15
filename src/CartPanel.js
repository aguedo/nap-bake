import React, { useState } from "react";
import db from "./db";
import { MinusIcon } from "@heroicons/react/24/outline";

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
        <span className="ml-2">($2.50/cupcake)</span>
        <span className="ml-2">
          Subtotal ${prodDetails.price * prodItem.inCart}
        </span>
      </div>
      <div className="flex">
        <div
          className={classNames(
            "flex",
            qtyState === "normal" ? "" : "qty-animate-bounce"
          )}
        >
          <button
            className="bg-[#D3D3D3] hover:bg-[#A9A9A9] pl-2 pr-1 py-1 rounded-l-full"
            onClick={() => updateCart(prodItem.id, -1)}
          >
            <MinusIcon
              className="block w-4 text-[#4E342E]"
              aria-hidden="true"
            />
          </button>
          <span className="inline-block bg-[#A8E6CF] rounded-r-full pl-2 pr-3 py-1 text-xs font-semibold mr-2">
            Qty: {prodItem.inCart}
          </span>
        </div>

        <button
          className="bg-[#FFC1CC] hover:bg-[#D48E8E] text-xs font-bold py-1 px-4 rounded-full mr-2"
          onClick={() => {
            updateCart(prodItem.id);
            animateQty();
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
