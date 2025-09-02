import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../utils/appSlice";
import { store } from "../utils/store";

const Header = () => {
    const dispatch = useDispatch()
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
    const toggleMenuHandler=()=>{
        dispatch(toggleState())

    }
  return (
    <div className=" shadow-lg grid grid-flow-col m-2 p-2 items-center relative bg-white z-10 w-screen">
      <div className="flex col-span-1.5   ">
        <img
          className="h-10 cursor-pointer "
          src={!isMenuOpen? "https://www.svgrepo.com/show/312300/hamburger-menu.svg":"https://static.vecteezy.com/system/resources/previews/021/190/319/non_2x/dotted-burger-menu-outline-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"}
          alt="hammer-icon"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-8 ml-2 mt-0.5"
          src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg"
          alt="logo"
        />
      </div>
      <div className="col-span-9 px-10 ">
        <input
          className="w-1/2 border border-gray-500 p-2.5 rounded-l-full right-1"
          type="text"
          placeholder="What you want to search Today...?"
        />
        <button className="cursor-pointer px-5.5 py-2.5 mr-1.5 text-center hover:bg-gray-300 rounded-r-full border border-gray-500 bg-gray-150 ">
          🔍
        </button>
      </div>
    
      <div className="col-span-1.5 cursor-pointer flex gap-6">
        <div className="relative group flex items-center">
          <img
            className="h-9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpK-S98xeWwN0s6jO4CKLubmN22q_yyv3yg&s"
            alt="notification-icon"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-3 py-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Notification
          </span>
        </div>
        <div className="relative group flex items-center">
          <img
            className="h-9 ml-7"
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
            alt="profile-icon"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Profile
          </span>
        </div>
      </div>

    </div>
  );
};

export default Header;
