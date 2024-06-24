// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './background.css';
export default function Navbar() {
  return (
    <nav className="bg-black sticky w-full mx-auto grid h-[80px] gap-3 grid-cols-2 px-8 py-6">
      <div id='Appear'>
          <ul className="flex w-full items-center gap-8">
          <li className="nav-links text-white list-none">
            <a className="text-2xl hover:text-lime-300" href="#">
              Appearance
            </a>
          </li>
          <li className="nav-links text-white list-none">
            <a className="text-2xl hover:text-lime-300" href="#">
              Analytics
            </a>
          </li>

          </ul>
      </div>
      <div id="nav-buttons" className=" flex gap-8 justify-end left-20">
        <div></div>
        <button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-24 h-10 rounded-2xl text-white font-bold"
        >
          GET LINK
        </button>
        <button
          type="button"
          className=" bg-lime-300 w-28 h-10 rounded-2xl text-black font-bold hover:bg-blue-400 hover:text-red-700"
        >
          EDIT PROFILE
        </button>
        <button
          type="button"
          className=" bg-red-500 w-24 h-10 rounded-2xl text-white font-bold"
        >
          SIGNOUT
        </button>
      </div>
        <FontAwesomeIcon id='bars' icon={faBars} />
    </nav>
  );
}
