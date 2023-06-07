import { Input } from "@/components/Input";
import { BiSearchAlt } from "react-icons/bi";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-@Black  md:px-10 h-16">
        <div className="navbar  max-w-[85rem] flex justify-cen w-full mx-auto px-4">
          <div className="navbar-start">
            <Link to={"/"}>
              <img src="/img/Logo.png" alt="" className=" w-24" />
            </Link>
          </div>
          <div className="navbar-center">
            <Input
              className="border placeholder:italic rounded-l-lg bg-white border-@Black text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full disabled:bg-@Gray2"
              name="search"
              placeholder="Search movies....."
              id="input-office-location"
            />
            <button className="bg-@Gold p-2 rounded-r-lg  text-white hover:text-@Black label-text text-2xl font-extrabold text-button">
              <BiSearchAlt />
            </button>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 bg-white rounded-full">
                  <img src="/img/user.svg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
