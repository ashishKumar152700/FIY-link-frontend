// eslint-disable-next-line no-unused-vars

export default function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-[20] w-full mx-auto grid gap-3 grid-cols-2 p-8">
      <div>
        <nav className="flex w-full items-center gap-8">
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
        </nav>
      </div>
      <div className=" flex gap-8 justify-end left-20">
        <div></div>
        <button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-28 h-12 rounded-2xl text-white font-bold"
        >
          GET LINK
        </button>
        <button
          type="button"
          className=" bg-lime-300 w-36 h-12 rounded-2xl text-black font-bold hover:bg-blue-400 hover:text-red-700"
        >
          EDIT PROFILE
        </button>
        <button
          type="button"
          className=" bg-red-500 w-28 h-12 rounded-2xl text-white font-bold"
        >
          SIGNOUT
        </button>
      </div>
    </header>
  );
}
