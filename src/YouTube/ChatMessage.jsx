import React, { useEffect } from "react";

const ChatMessage = ({ name, message,avatar }) => {
   
  return (
    <div>
      <div className="mt-3 flex shadow-sm p-[2px]  ">
        <img
          className="w-8 h-8 rounded-full mb-3"
          src={avatar}
          alt="user-icon"
        />
        <div className="flex m-1 ">
          <h1 className="ml-2 items-center font-bold mr-2">{name}:-</h1>
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
