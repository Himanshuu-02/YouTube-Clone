import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomAvatar,
  generateRandomMessages,
  generateRandomNames,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      //API pooling for live ChatMessage
      //console.log("Api is polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages() + " 🔥🔥🔥",
          id: Date.now(),
          avatar: generateRandomAvatar(),
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="ml-1 p-2   border border-black bg-slate-100 rounded-lg h-[200px] md:h-[600px] lg:h-[600px] overflow-y-scroll flex flex-col-reverse ">
        <div className="text-lg font-bold border-b border-b-gray-300 cursor-col-resize ">
          LiveChat :-
          <form
            className=" rounded-lg p-1 ml-1  flex"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addMessage({
                  name: "Himanshu",
                  message: liveMessage,
                  avatar:
                    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
                })
              );
              setLiveMessage("");
            }}
          >
            <input
              className=" px-2 font-normal "
              type="text"
              placeholder="Message..."
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)
                
              }
            />
            <button className="px-2 mx-2 bg-gray-300 cursor-pointer font-bolder hover:bg-gray-200" >
              Send
            </button>
          </form>
        </div>
        {chatMessage.map((chat) => (
          <ChatMessage
            key={chat.id}
            name={chat.name}
            message={chat.message}
            avatar={chat.avatar}
          />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
