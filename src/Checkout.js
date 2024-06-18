import { useState } from "react";
import db from "./db";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout({ menu, setMenu, contactInfo, setContactInfo, setOrder }) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const items = Object.entries(menu)
    .filter(([_, value]) => value.inCart > 0)
    .map(([key, value]) => ({
      prodDetails: db.menu[key],
      prodItem: value,
    }));
  const itemsCount = items.reduce((a, b) => a + b.prodItem.inCart, 0);
  const subtotal = items.reduce(
    (a, b) => a + b.prodDetails.price * b.prodItem.inCart,
    0
  );

  function getOrder() {
    return {
      deliveryDate: contactInfo.deliveryDate,
      contact: {
        name: contactInfo.fullName,
        phone: contactInfo.phone,
        address: contactInfo.address
      },
      items: items.map((item) => ({
        name: item.prodDetails.name,
        quantity: item.prodItem.inCart,
        unitPrice: item.prodDetails.price,
      }))
    };
  }

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    setSubmitting(true);
    const order = getOrder();
    setOrder(order);
    fetch(
      "https://aslanta-shared-api.azurewebsites.net/napbake/create-order", {
      //"https://localhost:7022/napbake/create-order-ping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then((response) => {
        if (!response.ok) {
          alert("Oops something went wrong. Please call 702-209-1699 to finish placing your order.")
          return;
        }

        setMenu((prevMenu) => {
          const newMenu = { ...prevMenu };
          for (const key in newMenu) {
            newMenu[key].inCart = 0;
          }
          return newMenu;
        });

        navigate("/checkout/confirmation", { props: { order } });
      })
      .catch((error) => alert("Oops something went wrong. Please call 702-209-1699 to finish placing your order."))
      .finally((_) => {
        setSubmitting(false);
      });
  }

  function updateContactInfo(prop, value) {
    setContactInfo((prevContactInfo) => {
      return {
        ...prevContactInfo,
        [prop]: value,
      };
    });
  }

  return (
    <div className="mt-6 mb-8 text-[#4E342E] px-2">
      <form method="post" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pb-12">
            <h1 className="text-base font-semibold">Contact Information</h1>
            <p className="mt-1 text-md">
              Please share your contact information with us. You don't need to
              pay now, we will reach out shortly to confirm your order details
              and address any questions you may have.
            </p>

            <div className="mt-4 grid gap-y-4">
              <div className="w-full">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium leading-6"
                >
                  Full name *
                </label>
                <div>
                  <input
                    required
                    type="text"
                    value={contactInfo.fullName}
                    onChange={(e) =>
                      updateContactInfo("fullName", e.target.value)
                    }
                    name="full-name"
                    id="full-name"
                    autoComplete="given-name"
                    className="block w-full border-2 p-2 rounded-lg mt-2 mr-4 border-[#A8E6CF] text-[#4E342E] focus:outline-none focus:border-[#D48E8E]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6"
                >
                  Phone *
                </label>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    value={contactInfo.phone}
                    onChange={(e) => updateContactInfo("phone", e.target.value)}
                    name="phone"
                    id="phone"
                    className="block w-full border-2 p-2 rounded-lg mt-2 mr-4 border-[#A8E6CF] text-[#4E342E] focus:outline-none focus:border-[#D48E8E]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="deliveryDate"
                  className="block text-sm font-medium leading-6"
                >
                  Delivery Date *
                </label>
                <div className="mt-2">
                  <input
                    type="datetime-local"
                    required
                    value={contactInfo.deliveryDate}
                    onChange={(e) => updateContactInfo("deliveryDate", e.target.value)}
                    name="deliveryDate"
                    id="deliveryDate"
                    className="block w-full border-2 p-2 rounded-lg mt-2 mr-4 border-[#A8E6CF] text-[#4E342E] focus:outline-none focus:border-[#D48E8E]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6"
                >
                  Address (optional)
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={contactInfo.address}
                    onChange={(e) =>
                      updateContactInfo("address", e.target.value)
                    }
                    name="address"
                    id="address"
                    autoComplete="address"
                    className="block w-full border-2 p-2 rounded-lg mt-2 mr-4 border-[#A8E6CF] text-[#4E342E] focus:outline-none focus:border-[#D48E8E]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              {!submitting && <Link className="text-sm font-semibold leading-6" to="/cart">Cancel</Link>}
              <button
                type="submit"
                disabled={submitting}
                className="text-sm font-semibold bg-[#FFC107] hover:bg-[#FFA000] text-[#4E342E] hover:text[#FFF8E7] py-2 px-4 rounded-full"
              >
                {(submitting &&
                  <div className="flex">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>)
                  || (<div className="flex">
                    Submit
                  </div>)
                }

              </button>
            </div>
          </div>

          <div className="pb-12">
            {items.map((item, index) => (
              <div className="max-w-full flex mb-2" key={index}>
                <div
                  className="h-16 w-16 flex-none bg-cover rounded-l text-center overflow-hidden"
                  style={{
                    backgroundImage: "url(" + item.prodDetails.img + ")",
                  }}
                  title={item.prodDetails.name}
                ></div>
                <div className="w-full border-r-[0.5px] border-b-[0.5px] border-[#D48E8E] border-l-0 border-t-[0.5px] bg-white rounded-r pl-4 pr-2 pt-2 flex flex-col justify-between leading-normal">
                  <div>
                    <div className="flex ">
                      <div className="grow">
                        <h1
                          to={item.prodDetails.link}
                          className="font-bold text-md text-[#D48E8E] "
                        >
                          {item.prodDetails.name}
                        </h1>
                      </div>
                      <div className="w-16 text-lg font-semibold text-center">
                        <p>${item.prodDetails.price * item.prodItem.inCart}</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm mb-1">
                        <span>($2.50/cupcake)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <p>
              Subtotal ({itemsCount} items):{" "}
              <span className="text-lg font-semibold">${subtotal}</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
