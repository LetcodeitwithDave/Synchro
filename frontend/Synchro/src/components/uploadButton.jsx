export const UploadButton = () => {
  return (
    <a href="/upload">
      <button className=" flex p-4 items-center text-sm font-rubikRegalar gap-2 bg-secondaryColor text-white rounded-full  h-9">
        {/* svg */}
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
            className="lucide lucide-file-up text-white"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M12 12v6" />
            <path d="m15 15-3-3-3 3" />
          </svg>
        </div>

        <div>
          <h1>UPLOAD A NEW FILE</h1>
        </div>
      </button>
    </a>
  );
};
