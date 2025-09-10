import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";
  return (
    <div>
      {isMenuOpen ? (
        <div className="fixed top-0 left-0 shadow-2xl py-2 w-46 md:w-56 h-full bg-white  ">
          <div className="overflow-y-scroll h-[calc(100vh-4rem)]  ">
            <ul className="m-3 p-3 border-b border-gray-300 mt-20 md:mt-23">
              <Link to={"/"}>
                <li className="hover:bg-gray-100 text-sm md:text-xl rounded px-2 py-1 cursor-pointer">
                  🏡 Home
                </li>{" "}
              </Link>
              <li className="hover:bg-gray-100 text-sm md:text-xl rounded px-2 py-1 cursor-pointer">
                <a href="https://www.youtube.com/shorts/7Lcnc6taKZY">
                  🎬 Shorts
                </a>
              </li>
              <Link to={"/"}>
                <li className="hover:bg-gray-100 text-sm md:text-xl rounded px-2 py-1 cursor-pointer">
                  <a href="https://www.youtube.com/feed/playlists">
                    {" "}
                    ▶️ Videos
                  </a>
                </li>
              </Link>
              <li className="hover:bg-gray-100 text-sm md:text-xl rounded px-2 py-1 cursor-pointer">
                📡 Live
              </li>
              <li className="hover:bg-gray-100 text-sm md:text-xl rounded px-2 py-1 cursor-pointer">
                <a href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
                  🔥 Trending
                </a>
              </li>
              <li className="hover:bg-gray-100 text-sm md:text-xl rounded px-2 py-1 cursor-pointer">
                <a href="https://www.youtube.com/account"> ⚙️ More</a>
              </li>
            </ul>
            <h1 className="font-bold py-2 ml-2">⭐ Subscriptions</h1>
            <ul className="ml-1 p-3 border-b border-gray-300 text-lg text-gray-800">
              <li className="hover:bg-gray-100  rounded px-2 py-1 cursor-pointer">
                Music
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Sports
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Movies
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Kids
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Gaming
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                News
              </li>
            </ul>
            <h1 className="font-bold py-2 mt-1 ml-2">📺 Watch Later</h1>
            <ul className="ml-1 p-3 border-b border-gray-300 text-lg text-gray-800">
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Music
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Podcast
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Tutorial
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                History
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Favorites
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Downloads
              </li>
            </ul>
            <h1 className="font-bold py-2 mt-1 ml-2">⚙️ More</h1>
            <ul className="ml-1 p-3 text-lg text-gray-800">
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Settings
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Help
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                Send Feedback
              </li>
              <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                About
              </li>
            </ul>
            <p className="mt-5 ml-2 font-bold">Made by Himanshu 💕</p>
            <div className="flex gap-4 mt-4 ml-2">
              <a href="https://github.com/Himanshuu-02">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  className="w-7 h-7"
                />
              </a>
              <a href="https://www.linkedin.com/in/himanshu-sharma-533b42287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-6 h-6 "
                />
              </a>
              <a href="https://www.instagram.com/iamhimanshuu_0?igsh=MTR6OTdyYmZkbmg3Nw==">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        !isWatchPage && (
          <div className="hidden md:block lg:block">
            <ul className="  -m-1 p-3 border-b border-gray-300 mt-20 md:mt-10 ">
              <Link to={"/"}>
                {" "}
                <li className="hover:bg-gray-300 [text-8px] md:text-[14px] rounded px-2  mt-6 py-1  cursor-pointer mr-3">
                  <span className="ml-2"> 🏡 </span>

                  <span className=" mr-4 hover:bg-gray-300">Home</span>
                </li>{" "}
              </Link>
              <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1  cursor-pointer -ml-2">
                <a href="https://www.youtube.com/feed/subscriptions">
                  <span className="ml-4">⭐</span>
                  <span className="-mr-4 "> Subscriptions</span>
                </a>
              </li>
              <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1 cursor-pointer -ml-2">
                <span className="ml-4">📺</span>
                <span className=""> WatchLater</span>
              </li>
              <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1  w-1/2 cursor-pointer -mr-1.5">
                <a href="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig">
                  {" "}
                  <span className="ml-1">📡</span>
                  <span className="text-[15px]">Live</span>
                </a>
              </li>
              <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1  w-[45px] cursor-pointer -ml-1">
                <span className="ml-3">🔥</span>
                <span className=""> History</span>
              </li>
              <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1 w-[40px] cursor-pointer ml-0 flex flex-col items-center">
                <a
                  href="https://www.youtube.com/account"
                  className="flex flex-col items-center"
                >
                  <span className="">⚙️</span>
                  <span className="mt-1">More</span>
                </a>
              </li>
            </ul>

            {/* <p className="mt-5 font-bold">Made by Himanshu 💕</p> */}
            {/* <div className="flex gap-4 mt-4">
              <a href="https://github.com/Himanshuu-02">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  className="w-7 h-7"
                />
              </a>
              <a href="https://www.linkedin.com/in/himanshu-sharma-533b42287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-6 h-6 "
                />
              </a>
              <a href="https://www.instagram.com/iamhimanshuu_0?igsh=MTR6OTdyYmZkbmg3Nw==">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div> */}
          </div>
        )
      )}
    </div>
  );
};
export default SideBar;
