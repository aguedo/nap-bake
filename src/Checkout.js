import db from "./db";

export default function Checkout({ menu, contactInfo, setContactInfo }) {
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

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
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
                    value={contactInfo.phone}
                    onChange={(e) => updateContactInfo("phone", e.target.value)}
                    type="text"
                    name="phone"
                    id="phone"
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
              <button type="button" className="text-sm font-semibold leading-6">
                Cancel
              </button>
              <button
                type="submit"
                className="text-sm font-semibold bg-[#FFC107] hover:bg-[#FFA000] text-[#4E342E] hover:text[#FFF8E7] py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="pb-12">
            {items.map((item, index) => (
              <div className="max-w-full flex mb-2" key={index}>
                <div
                  className="h-16 w-16 flex-none bg-cover rounded-t rounded-l rounded-r-none text-center overflow-hidden"
                  style={{
                    backgroundImage: "url(" + item.prodDetails.img + ")",
                  }}
                  title={item.prodDetails.name}
                ></div>
                <div className="w-full border-r-[0.5px] border-b-[0.5px] border-[#D48E8E] border-l-0 border-t-[0.5px] bg-white rounded-b rounded-r pl-4 pr-2 pt-2 flex flex-col justify-between leading-normal">
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
