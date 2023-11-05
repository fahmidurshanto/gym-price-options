import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/products/:id", name: "ProductDetail", id: 5 },
  ];

  return (
    <nav className="bg-yellow-200 p-6">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <HiOutlineMenuAlt1 className="text-3xl "></HiOutlineMenuAlt1>
        ) : (
          <AiOutlineClose className="text-3xl"></AiOutlineClose>
        )}
      </div>
      <ul
        className={`text-black shadow-lg duration-1000 bg-yellow-200 md:flex absolute md:static py-6 px-4 ${
          open ? "-top-60" : "top-12"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
