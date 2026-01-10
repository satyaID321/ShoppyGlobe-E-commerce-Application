import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ searchText, setSearchText }) {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <nav className="bg-cyan-200 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-7xl p-5 mx-auto text-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="font-bold text-2xl sm:text-3xl tracking-wide"> SHOPPYGLOBE </h1>

            <div className="hidden sm:block flex-1 sm:max-w-[420px]">
              <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for products..."
                className=" bg-blue-100 w-full px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-cyan-400"/>
            </div>

            <ul className="flex gap-5 font-semibold whitespace-nowrap">
              <li>
                <Link to="/help" className="hover:text-cyan-700">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-cyan-700">
                  Cart ({cart.length})
                </Link>
              </li>
            </ul>

          </div>
          
          <div className="mt-3 sm:hidden">
            <input type="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search for products..."
              className="bg-blue-100 w-full px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>

        </div>
      </nav>

      {/* given space for content so it doesn't hide behind the header */}
      <div className="h-40 sm:h-20"></div>

    </>
  );
}

export default Header;

