import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Theme from "./Theme";

import Option from "./Option";
import { Link } from "react-router-dom";

import HeaderMenu from "../navbar/HeaderMenu";
import MainHome from "../MainHome/MainHome";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <React.Fragment>
      <Theme>
        {/* flex sm:static sm:inset-auto */}
        <div className="absolute inset-y-0 left-0 md:inset-y-0  md:left-0 items-center pr-2 sm:ml-10 sm:pr-0">
          <button
            type="button"
            className="rounded-full opacity-0 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="sr-only">View notifications</span>
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-8  flex items-center ">
            {/* <div className="md:mr-80 md:block lg:hidden hidden"> */}
            <div className="md:mr-80 md:block lg:hidden">
              <div className="flex space-x-4 gap-y-8 w-fit mt-6">
                <Menu.Button className="flex rounded-full w-14 h-14  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only ">Open user menu</span>
                  <img
                    className="h-14 w-14 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
                <div className=" text-10xl text-white">
                  <p>Xin chào,</p>
                  <h2 className="font-bold">Minh Dũng CG</h2>
                </div>
              </div>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute sm:inset-x-1/5 top-20 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
            <Option />
          </Menu>
        </div>
        <HeaderMenu />
        <MainHome />
      </Theme>
    </React.Fragment>
  );
};

export default Header;
