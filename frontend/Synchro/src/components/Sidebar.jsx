import { Navlinks } from "../constants";
import { CloudUpload } from "lucide-react";
import { illustrationDashboard } from "../assets/images";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className=" bg-white  flex flex-col items-start  px-6 min-h-screen   mt-8">
      <div className=" mx-4 ">
        <div className=" flex flex-row gap-2 items-center ">
          <div>
            <CloudUpload className=" p-2 w-full h-full rounded-md bg-secondaryColor text-lg text-white" />
          </div>

          <h1 className=" font-rubikSemiBold text-2xl text-gray-900">
            Synchro
          </h1>
        </div>

        <div className=" mt-12">
          {Navlinks.map((items) => (
            <Link to={items.href}>
              <button
                className={`mt-4 font-rubikRegalar py-4 pr-16 p-6   ${
                  location.pathname == items.href &&
                  "bg-secondaryColor hover:text-white  transition duration-200 text-white rounded-full shadow-xl"
                }  text-md text-gray-700 hover:text-secondaryColor gap-4 flex `}
                key={items.label}
              >
                {location.pathname == items.href ? (
                  <items.icon className=" fill-current text-white" />
                ) : (
                  <items.icon className=" fill-current text-gray-400" />
                )}

                {items.label}
              </button>
            </Link>
          ))}
        </div>

        <div className=" flex flex-col items-center  mt-14 ">
          <img
            src={illustrationDashboard}
            alt="dashboard illustration"
            className=" w-56"
          />
          <div className=" flex gap-4 items-center  mt-10 ">
            <div className=" h-14  w-14  rounded-full bg-gray-300" />

            <div>
              <h1 className=" font-rubikSemiBold">Solola David</h1>
              <p className=" font-rubikRegalar text-gray-500">
                sololadavid4@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
