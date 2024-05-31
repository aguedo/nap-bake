export default function ItemCart({ updateCart, menuItem }) {
  return (
    <div className="text-[#4E342E]">
      <span className="inline-block bg-[#A8E6CF] rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
        Qty: {menuItem.inCart}
      </span>
      <button
        className="bg-[#FFC1CC] hover:bg-[#D48E8E] text-xs font-bold py-1 px-4 rounded-full mr-2"
        onClick={() => updateCart(menuItem.id)}
      >
        Add to cart
      </button>
      {menuItem.inCart > 0 && (
        <button
          className="bg-[#FF6F61] hover:bg-[#D48E8E] text-[#FFF8E7] text-xs font-bold py-1 px-4 rounded-full"
          onClick={() => updateCart(menuItem.id, -1)}
        >
          Remove
        </button>
      )}
    </div>
  );
}
