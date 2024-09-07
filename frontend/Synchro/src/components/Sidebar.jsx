import { Navlinks } from "../constants";

export default function Sidebar() {
  return (
    <div className=" bg-sidebarBg  max-w-xs min-h-screen   pt-8">
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

          <h1 className=" font-rubikRegalar text-xl text-gray-900">Synchro</h1>
        </div>
        {Navlinks.map((items) => (
          <div
            className="  mt-8 font-rubikRegalar  text-md text-gray-700 "
            key={items.label}
          >
            <a href={items.href}>{items.label}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
