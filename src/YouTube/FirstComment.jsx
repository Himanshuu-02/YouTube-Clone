import React from "react";

const FirstComment = ({ data }) => {
  const { author, text, avatarUrl, replies,id } = data;
  return (
    <div className="mr-4">
      <div className="flex gap-3 shadow-sm bg-gray-100 rounded-lg p-2 my-2">
        <img className="w-12 h-12 rounded-full mb-3" src={avatarUrl} alt="DP" />
        <div className="flex flex-col gap-[2px] ">
          <h1 className="font-bold">@{author}</h1>
          <p className="text-gray-900">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FirstComment;
