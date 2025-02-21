"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100">
      <div className="flex container items-center justify-between mx-auto py-2 sm:py-4 px-8 md:px-12 lg:px-20">
        <Link
          href={"/"}
          className="text-2xl md:text-2xl text-purple-800 font-normal"
        >
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-2xl md:text-2xl lg:text-3xl">
            &lt;/&gt;
          </p>
        </Link>
        <div className="md:block md:w-auto">
          <ul className="flex p-0 md:p-0 md:flex-row mt-0">
            <li key="projects">
              <Link
                href="#projects"
                className="hover:text-slate-200 py-2 px-4"
              >
                Projects
              </Link>
            </li>
            <li key="blog">
              <Link
                href="#blog"
                className="hover:text-slate-200 py-2 px-4"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;