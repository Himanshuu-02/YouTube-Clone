import React from "react";
import { useSelector } from "react-redux";
import { Link,useLocation } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
 const location = useLocation();
  const isWatchPage = location.pathname === "/watch";
  return (
    <div>
      {isMenuOpen ? (
        <div className="fixed top-0 left-0 shadow-2xl py-2 w-56 h-full bg-white  ">
          <div className="overflow-y-scroll h-[calc(100vh-4rem)]  ">
            <ul className="m-3 p-3 border-b border-gray-300 mt-21">
             <Link to={"/"}><li className="hover:bg-gray-100 text-xl rounded px-2 py-1 cursor-pointer">
                🏡 Home
              </li> </Link>
              <li className="hover:bg-gray-100 text-xl rounded px-2 py-1 cursor-pointer">
                <a href="https://www.youtube.com/shorts/7Lcnc6taKZY">🎬 Shorts</a>
                
              </li>
              <Link to={"/"}><li className="hover:bg-gray-100 text-xl rounded px-2 py-1 cursor-pointer">
                ▶️ Videos
              </li></Link>
              <li className="hover:bg-gray-100 text-xl rounded px-2 py-1 cursor-pointer">
                📡 Live
              </li>
              <li className="hover:bg-gray-100 text-xl rounded px-2 py-1 cursor-pointer">
                🔥 Trending
              </li>
              <li className="hover:bg-gray-100 text-xl rounded px-2 py-1 cursor-pointer">
                ⚙️ More
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
          </div>
        </div>
      ) : (
      !isWatchPage && <div className=" ">
        <ul className="  -m-1 p-3 border-b border-gray-300 mt-10 ">
        <Link to={"/"} > <li className="hover:bg-gray-300 text-[12px] rounded px-2  mt-6 py-1 w-1/2 cursor-pointer ">
            🏡 Home
          </li> </Link>
          <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1 w-1/2 cursor-pointer">
          <a href="https://www.youtube.com/feed/subscriptions"> ⭐ Subscriptions</a>
           
          </li>
          <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1 cursor-pointer">
            📺 WatchLater
          </li>
          <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1 w-1/2  cursor-pointer">
          <a href="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig"> 📡 Live</a>
           
          </li>
          <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1  w-1/2 cursor-pointer">
            🔥 History
          </li>
          <li className="hover:bg-gray-300 text-[12px] rounded px-2 mt-6 py-1 w-1/2 cursor-pointer">
          <a href="https://www.youtube.com/account">⚙️ More</a>
            
          </li>
        </ul>
      
      <p className="mt-5">Made by Himanshu 💕</p>
      <div className="flex gap-4 mt-4">
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
      )
      }
    </div>
      
  );
};
export default SideBar;
