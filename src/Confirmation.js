export default function Confirmation({ order }) {

  return (
    <div className="mt-6 mb-8 text-[#4E342E] px-2">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Thank you for your order!</h1>
        <p>You can print this page to keep a copy of the order.</p>
      </div>
      <p><span className="font-semibold">Name:</span> {order.contact.name}</p>
      <p><span className="font-semibold">Phone:</span> {order.contact.phone}</p>
      <p><span className="font-semibold">Delivery Date:</span> {order.deliveryDate}</p>
      <p><span className="font-semibold">Address:</span> {order.contact.address}</p>
      <p><span className="font-semibold">Subtotal:</span> ${order.items.reduce(
        (a, b) => a + b.unitPrice * b.quantity,
        0
      )}</p>
      <table className="table-auto border-collapse border mt-4">
        <thead>
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Unit Price</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">
                {item.name}
              </td>
              <td className="border p-2">
                ${item.unitPrice}
              </td>
              <td className="border p-2">
                {item.quantity}
              </td>
              <td className="border p-2">
                ${item.unitPrice * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-10">
        <button onClick={() => window.print()}
          className="text-sm font-semibold bg-[#FFC107] hover:bg-[#FFA000] text-[#4E342E] hover:text[#FFF8E7] py-2 px-4 rounded-full">Print</button>
      </div>
    </div>
  );
}
