/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import s from './Sidebar.module.css';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link
            className="md:block mx-auto md:pb-2 text-blueGray-600 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <img
              className={s.medal}
              src={require("assets/img/120px-Medal_of_Golden_Star_Ukraine.png").default}
              alt="Орден 'Золотої Зірки'"
            />
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Орден "Золота Зірка"
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-home mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Дім
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/medal/awarded-list") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/medal/awarded-list"
                >
                  <i
                    className={
                      "fas fa-award mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/medal/awarded-list") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Нагороджені
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/medal/history") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/medal/history"
                >
                  <i
                    className={
                      "fas fa-monument mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/medal/history") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Історія
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/medal/about") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/medal/about"
                >
                  <i
                    className={
                      "fas fa-pencil-ruler mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/medal/about") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Опис ордена
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/medal/procedure") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/medal/procedure"
                >
                  <i
                    className={
                      "fas fa-clipboard-list mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/medal/procedure") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Процедура
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/medal/regulations") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/medal/regulations"
                >
                  <i
                    className={
                      "fas fa-book mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/medal/regulations") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Статут
                </Link>
              </li>
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Головні Новини
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/main-news/create") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/main-news/create"
                >
                  <i class={
                      "fas fa-plus mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/main-news/create") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }></i>{" "}
                  Створити
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/main-news/archive") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/main-news/archive"
                >
                  <i class={
                      "fas fa-archive mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/main-news/archive") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }></i>{" "}
                  Архів
                </Link>
              </li>
            </ul>
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Новини
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/news/create") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/news/create"
                >
                  <i class={
                      "fas fa-plus mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/news/create") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }></i>{" "}
                  Створити
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/news/archive") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                    }
                    to="/admin/news/archive"
                >
                  <i class={
                      "fas fa-archive mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/news/archive") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }></i>{" "}
                  Архів
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Інше
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/contacts") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/contacts"
                >
                  <i className={
                      "fas fa-newspaper mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/contacts") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }></i>{" "}
                  Контакти
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i class="fas fa-cogs text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Налаштування
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
