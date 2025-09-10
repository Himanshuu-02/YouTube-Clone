import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import { Youtube_API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icons from "./Icons";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const getData = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
          Youtube_API_KEY
      )
      .then((response) => {
        setVideoData(response.data.items);
        //console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className={`flex flex-wrap space-x-1 transition-all duration-300 ${
        isMenuOpen ? "ml-13 md:ml-48" : "ml-5"
      }`}
    >
      {videoData.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}
        //that is use for share the data of videocard share to watch page
        state={{videoInfo: video}}> 
          <VideoCard info={video} />
        </Link>
      ))}
      <Icons/>
    </div>
  );
};

export default VideoContainer;
