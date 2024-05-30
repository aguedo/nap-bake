import { Outlet, Link, NavLink } from "react-router-dom";
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
import logo from "./resources/logo.jpeg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ menu }) {
  return (
    <div>
      <NavigationBar menu={menu} />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <footer className="bg-[#4E342E] text-[#FFF8E7] mt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              Naperville Bake.
            </Link>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:underline me-4 md:me-6">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline me-4 md:me-6">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function NavigationBar({ menu }) {
  const itemsCount = Object.entries(menu)
    .map(([key, value]) => value.inCart)
    .reduce((a, b) => a + b);
  return (
    <Disclosure as="nav" className="bg-[#FFF8E7]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-[#4E342E] hover:bg-[#D48E8E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-[#4E342E]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-[#4E342E]"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Naperville Bake"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-[#D48E8E] text-[#A8E6CF]"
                            : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
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
                            ? "bg-[#D48E8E] text-[#A8E6CF]"
                            : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
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
                            ? "bg-[#D48E8E] text-[#A8E6CF]"
                            : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
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
                  className="relative rounded-full p-1 text-[#4E342E] hover:bg-[#FFC1CC] focus:outline-none "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View Cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </Link>
                <span className="relative bg-[#A8E6CF] text-[#4E342E] rounded-full px-3 py-1 text-xs font-semibold">
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
                      ? "bg-[#D48E8E] text-[#A8E6CF]"
                      : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
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
                      ? "bg-[#D48E8E] text-[#A8E6CF]"
                      : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
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
                      ? "bg-[#D48E8E] text-[#A8E6CF]"
                      : "text-[#4E342E] hover:bg-[#FFC1CC]] hover:text-[#D48E8E]",
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
  );
}
