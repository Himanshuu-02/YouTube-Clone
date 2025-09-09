import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeState } from "../utils/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [subscribe, setSubscribe] = useState(false);
  const subscribeHandler = () => {
    setSubscribe(!subscribe);
  };
  // console.log(searchParams.get("v"));
  //used for share the data from videocard to watchpage
  const location = useLocation();
  const videoInfo = location.state?.videoInfo;
  //console.log(videoInfo);

  if (!videoInfo) return null;
  const dispatch = useDispatch();
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;
  useEffect(() => {
    dispatch(closeState());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="mt-15 px-2 flex flex-col lg:flex-row w-full">
        <div className="flex-1 ">
          <iframe
            className="w-full h-[200px] md:h-[400px] lg:h-[600px] "
            width="1100"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" w-[350] lg:w-[400px]  bg-gray-100 rounded-lg  h-[200px] md:h-[600px] lg:h-[600px] ">
          <LiveChat />
        </div>
      </div>
      <div className="max-w-11/12 mt-6 md:mt-0">
        <h1 className="mt-3 px-4 text-lg md:text-xl font-bold">{title}</h1>
        <div className="flex gap-10">
          <div>
            <h2 className="mt-1.5 p-5 text-sm md:text-lg font-bold">{channelTitle}</h2>
            <p className="-mt-4.5 px-5 text-gray-700 ">612k Suscribers</p>
          </div>

          <div>
            <button
              onClick={subscribeHandler}
              className={`bg-black text-white p-2.5 m-2 mt-8 cursor-pointer hover:bg-gray-700  rounded-full ${
                !subscribe ? "bg-red-600" : "bg-black"
              }`}
            >
              {!subscribe ? " Subscribe" : "Thanks for Subscribed"}
            </button>
          </div>
        </div>

        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
