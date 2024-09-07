import { links } from "../constants";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className=" bg-sidebarBg  max-w-md px-6 min-h-screen   pt-8">
      <div className=" mx-8">
        <div className=" flex flex-row gap-2 items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cloud-upload p-2 w-full h-full rounded-md bg-secondaryColor text-lg text-white"
            >
              <path d="M12 13v8" />
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="m8 17 4-4 4 4" />
            </svg>
          </div>

          <h1 className=" font-rubikSemiBold text-xl text-gray-900">Synchro</h1>
        </div>
        {links.map((items) => (
          <div
            className="  mt-8 font-rubikRegalar  text-md text-gray-700 hover:text-secondaryColor"
            key={items.label}
          >
            <a href={items.href}>
              <p
                className={`${
                  location.pathname == items.href ? "text-secondaryColor" : ""
                } `}
              >
                {items.label}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
