import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import BakeMenu from "./Menu/Menu";
import db from "./db";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Cart({ menu }) {
  const itemsInCart = Object.entries(menu)
    .filter(([_, value]) => value.inCart > 0)
    .map(([key, value]) => {
      const menuItem = db.menu[key];
      return (
        <li key={key}>
          {menuItem.name}: {value.inCart}
        </li>
      );
    });

  return (
    <div>
      <p>Cart</p>
      <ul> {itemsInCart}</ul>
      <hr />
    </div>
  );
}

function Home({ menu, addToCart }) {
  return (
    <div>
      <Cart menu={menu} />
      <BakeMenu addToCart={addToCart} menu={menu} />
    </div>
  );
}

function Layout({ menu }) {
  const itemsCount = Object.entries(menu)
    .map(([key, value]) => value.inCart)
    .reduce((a, b) => a + b);
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <NavLink
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )
                        }
                        to=""
                      >
                        Home
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )
                        }
                        to="/menu"
                      >
                        Menu
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )
                        }
                        to="/cart"
                      >
                        Cart
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    to="/cart"
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-yellow-400 hover:text-white focus:outline-none "
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                  <span className="relative bg-yellow-400 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                    {itemsCount}
                  </span>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )
                  }
                  to=""
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )
                  }
                  to="/menu"
                >
                  Menu
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )
                  }
                  to="/cart"
                >
                  Cart
                </NavLink>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </div>
  );
  // return (
  //   <div>
  //     {/* A "layout route" is a good place to put markup you want to
  //         share across all the pages on your site, like navigation. */}
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/menu">Menu</Link>
  //         </li>
  //         <li>
  //           <Link to="/dashboard">Dashboard</Link>
  //         </li>
  //         <li>
  //           <Link to="/nothing-here">Nothing Here</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     <hr />

  //     {/* An <Outlet> renders whatever child route is currently active,
  //         so you can think about this <Outlet> as a placeholder for
  //         the child routes we defined above. */}
  //     <Outlet />
  //   </div>
  // );
}

export default function App() {
  const [menu, setMenu] = useState({
    chocolateCupcakes: {
      id: "chocolateCupcakes",
      inCart: 0,
    },
    vanillaCake: {
      id: "vanillaCake",
      inCart: 0,
    },
  });

  function addToCart(id) {
    setMenu((prevMenu) => {
      return {
        ...prevMenu,
        [id]: { ...prevMenu[id], inCart: prevMenu[id].inCart + 1 },
      };
    });
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout menu={menu} />}>
          <Route index element={<Home addToCart={addToCart} menu={menu} />} />
          <Route
            exact
            path="/menu"
            element={<BakeMenu addToCart={addToCart} menu={menu} />}
          />
          <Route exact path="/cart" element={<Cart menu={menu} />} />

          {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
