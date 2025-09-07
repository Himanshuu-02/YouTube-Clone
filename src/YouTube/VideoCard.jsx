import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="mr-7">
      <div className="p-2 m-2 w-75 py-6">
        <img
          className=" rounded-xl shadow-lg cursor-pointer hover:bg-black/50"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <ul className="  ">
          <li className="font-bold py-2.5">{title}</li>
          <li className="text-black">{channelTitle}</li>
          <li className="text-gray-600">
            {statistics.viewCount} views - {statistics.likeCount} likes
          </li>
          <li className="items-end">{new Date(publishedAt).toLocaleDateString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
