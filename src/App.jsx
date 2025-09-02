import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./YouTube/Header";
import Body from "./YouTube/Body";
import { Provider } from "react-redux";
import { store } from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full  min-h-screen overflow-x-hidden bg-gray-50">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
