import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./YouTube/Header";
import Body from "./YouTube/Body";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./YouTube/MainContainer";
import WatchPage from "./YouTube/WatchPage";

const appRouter= createBrowserRouter([
  {path: "/",
    element: <Body/>,
    children:[
      {
      path: "/",
      element:<MainContainer/>
      },
      {
        path: "/watch",
        element:<WatchPage/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div className="w-full  min-h-screen overflow-x-hidden bg-gray-50">
        <Header />
       <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
