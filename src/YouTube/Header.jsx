import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../utils/appSlice";
import { store } from "../utils/store";
import { Youtube_API_KEY } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion]= useState(false)
  const dispatch = useDispatch();
  //for mobile search view
  const [showMobileSearch, setShowMobileSearch] = useState(false);

const toggleSearchBar = () => {
  setShowMobileSearch(!showMobileSearch);
};


  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const toggleMenuHandler = () => {
    dispatch(toggleState());
  };
const suggestionHandler = async () => {
  if (!searchQuery) return; // Don't fetch if query is empty

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${Youtube_API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("API Error:", response.status, response.statusText);
      return;
    }
    const data = await response.json();
    if (data.items) {
      const searchResult = data.items.map((item) => item.snippet.title);
      setSuggestion(searchResult);
    } else {
      setSuggestion([]); // Clear suggestions if no data
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};
  useEffect(() => {
    const timer = setTimeout(() => {
      suggestionHandler();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  // return (
  //   <div className="fixed shadow-xl grid grid-flow-col p-3 items-center bg-white/90 z-10 w-screen">
  //     <div className="flex col-span-1.5  bg-white ">
  //       <img
  //         className="h-8 md:h-10 lg:h-12 cursor-pointer "
  //         src={
  //           !isMenuOpen
  //             ? "https://www.svgrepo.com/show/312300/hamburger-menu.svg"
  //             : "https://static.vecteezy.com/system/resources/previews/021/190/319/non_2x/dotted-burger-menu-outline-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
  //         }
  //         alt="hammer-icon"
  //         onClick={toggleMenuHandler}
  //       />
  //       <img
  //         className="h-8 ml-2 mt-1.5"
  //         src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg"
  //         alt="logo"
  //       />
  //     </div>
  //     <div className="col-span-9 px-10 ">
  //       <div>
  //         <input
  //           className="w-1/2 border border-gray-500 p-2.5 rounded-l-full right-1"
  //           type="text"
  //           placeholder="What you want to search Today...?"
  //           value={searchQuery}
  //           onChange={(e) => setSearchQuery(e.target.value)}
  //           onFocus={()=>setShowSuggestion(true)}
  //           onBlur={()=>setShowSuggestion(false)}
  //         />
  //         <button className="cursor-pointer px-5.5 py-2.5 mr-1.5 text-center hover:bg-gray-300 rounded-r-full border border-gray-500 bg-gray-150 ">
  //           🔍
  //         </button>
  //       </div>
  //       {searchQuery && showSuggestion && (
  //         <div className="fixed bg-white shadow-lg w-1/3 px-2 py-2  rounded-lg border border-gray-100">
  //           <ul className="px-3 py-2 cursor-pointer flex flex-col gap-2">
  //             {searchQuery && (
  //               <li className="shadow-sm py-2 hover:bg-gray-200">
  //                 🔍{searchQuery}
  //               </li>
  //             )}
  //             {searchQuery && (
  //             <li className="shadow-sm py-2 hover:bg-gray-200">
  //                 🔍{searchQuery}ih
  //               </li>
  //             )}
  //             {suggestion.map((item, index) => (
  //               <li key={index} className="shadow-sm py-2 hover:bg-gray-200">
  //                 🔍{item}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       )}
  //     </div>

  //     <div className="col-span-1.5 cursor-pointer flex gap-6">
  //       <div className="relative group flex items-center">
  //         <img
  //           className="h-9"
  //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpK-S98xeWwN0s6jO4CKLubmN22q_yyv3yg&s"
  //           alt="notification-icon"
  //         />
  //         <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-3 py-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
  //           Notification
  //         </span>
  //       </div>
  //       <div className="relative group flex items-center">
  //         <img
  //           className="h-9 ml-7"
  //           src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
  //           alt="profile-icon"
  //         />
  //         <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
  //           Profile
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // )


  //new

 return (
  <>
    {/* Header */}
    <div className="fixed shadow-xl grid grid-flow-col p-3 items-center bg-white/90 z-10 w-screen">
      
      {/* Left: Menu & Logo */}
      <div className="flex col-span-1.5 items-center">
        <img
          className="h-8 md:h-10 lg:h-12 cursor-pointer"
          src={
            !isMenuOpen
              ? "https://www.svgrepo.com/show/312300/hamburger-menu.svg"
              : "https://static.vecteezy.com/system/resources/previews/021/190/319/non_2x/dotted-burger-menu-outline-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          }
          alt="menu-icon"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-8 ml-2 mt-1"
          src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg"
          alt="logo"
        />
      </div>

      {/* Center: Search Bar (Desktop Only) */}
      <div className="hidden md:block col-span-9 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-500 p-2.5 rounded-l-full"
            type="text"
            placeholder="What you want to search Today...?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="cursor-pointer px-5.5 py-2.5 mr-1.5 text-center hover:bg-gray-300 rounded-r-full border border-gray-500 bg-gray-150">
            🔍
          </button>
        </div>
        {/* Suggestions for Desktop */}
        {searchQuery && showSuggestion && (
          <div className="absolute bg-white shadow-lg w-1/3 px-2 py-2 rounded-lg border border-gray-100">
            <ul className="px-3 py-2 cursor-pointer flex flex-col gap-2">
              {searchQuery && (
                <li className="shadow-sm py-2 hover:bg-gray-200">
                  🔍 {searchQuery}
                </li>
              )}
              {suggestion.map((item, index) => (
                <li key={index} className="shadow-sm py-2 hover:bg-gray-200">
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Search Button */}
      <button
        className="md:hidden px-3 py-2 bg-gray-200 rounded-lg"
        onClick={toggleSearchBar}
      >
        🔍
      </button>

      {/* Right Icons */}
      <div className="col-span-1.5 flex gap-1 md:gap-6 ml-9 md:ml-0">
        <div className="relative group flex items-center">
          <img
            className="h-9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpK-S98xeWwN0s6jO4CKLubmN22q_yyv3yg&s"
            alt="notification-icon"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-3 py-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Notification
          </span>
        </div>
        <div className="relative group flex items-center">
          <img
            className="h-9 ml-6 md:ml-7"
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
            alt="profile-icon"
          />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Profile
          </span>
        </div>
      </div>
    </div>

    {/* Mobile Search Bar */}
    {showMobileSearch && (
      <div className="fixed top-16 left-0 w-full bg-white p-3 flex flex-col shadow-lg md:hidden">
        <div className="flex items-center">
          <input
            className="w-full border border-gray-500 p-2 rounded-l-full"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button
            className="px-4 py-2 bg-gray-300 rounded-r-full"
            onClick={toggleSearchBar}
          >
            ✖
          </button>
        </div>
        {/* Suggestions for Mobile */}
        {searchQuery && showSuggestion && (
          <div className="bg-white shadow-lg w-full px-2 py-2 rounded-lg border border-gray-100 mt-2">
            <ul className="px-3 py-2 cursor-pointer flex flex-col gap-2">
              {searchQuery && (
                <li className="shadow-sm py-2 hover:bg-gray-200">
                  🔍 {searchQuery}
                </li>
              )}
              {suggestion.map((item, index) => (
                <li key={index} className="shadow-sm py-2 hover:bg-gray-200">
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )}
  </>
);

}
export default Header;

//new without using the youtube suggestion api key

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleState } from "../utils/appSlice";
// import { store } from "../utils/store";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestion, setSuggestion] = useState([]);
//   const [showSuggestion, setShowSuggestion] = useState(false);
//   const dispatch = useDispatch();
//   const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
//   const toggleMenuHandler = () => {
//     dispatch(toggleState());
//   };
//   const suggestionHandler = async () => {
//     if (!searchQuery) return;
//     const response = await fetch(
//       `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
//     );
//     const data = await response.json();
//     console.log(data);
//     setSuggestion(data[1]);
//   };
//   useEffect(() => {
//     const timer = setTimeout(() => suggestionHandler(), 200);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);
//   return (
//     <div className="fixed  grid grid-flow-col p-3 items-center bg-white/90 z-10 w-screen">
//       <div className="flex col-span-1.5  bg-white ">
//         <img
//           className="h-10 cursor-pointer "
//           src={
//             !isMenuOpen
//               ? "https://www.svgrepo.com/show/312300/hamburger-menu.svg"
//               : "https://static.vecteezy.com/system/resources/previews/021/190/319/non_2x/dotted-burger-menu-outline-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
//           }
//           alt="hammer-icon"
//           onClick={toggleMenuHandler}
//         />
//         <img
//           className="h-8 ml-2 mt-0.5"
//           src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg"
//           alt="logo"
//         />
//       </div>
//       <div className="col-span-9 px-10 ">
//         <div>
//           <input
//             className="w-1/2 border border-gray-500 p-2.5 rounded-l-full right-1"
//             type="text"
//             placeholder="What you want to search Today...?"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onFocus={() => setShowSuggestion(true)}
//             onBlur={() => setShowSuggestion(false)}
//           />
//           <button className="cursor-pointer px-5.5 py-2.5 mr-1.5 text-center hover:bg-gray-300 rounded-r-full border border-gray-500 bg-gray-150 ">
//             🔍
//           </button>
//         </div>

//         {searchQuery && showSuggestion && (
//           <div className="fixed bg-white shadow-lg w-1/3 px-2 py-2  rounded-lg border border-gray-100">
//             <ul className="px-3 py-2 cursor-pointer flex flex-col gap-2">
//               {searchQuery && (
//                 <li className="shadow-sm py-2 hover:bg-gray-200">
//                   🔍{searchQuery}
//                 </li>
//               )}
//               {searchQuery && (
//                 <li className="shadow-sm py-2 hover:bg-gray-200">
//                   🔍{searchQuery}ihg
//                 </li>
//               )}
//               {suggestion.map((item, idx) => (
//                 <li key={idx} className="shadow-sm py-2 hover:bg-gray-200">
//                   🔍{item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="col-span-1.5 cursor-pointer flex gap-6">
//         <div className="relative group flex items-center">
//           <img
//             className="h-9"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpK-S98xeWwN0s6jO4CKLubmN22q_yyv3yg&s"
//             alt="notification-icon"
//           />
//           <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-3 py-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
//             Notification
//           </span>
//         </div>
//         <div className="relative group flex items-center">
//           <img
//             className="h-9 ml-7"
//             src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
//             alt="profile-icon"
//           />
//           <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2rem] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
//             Profile
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
