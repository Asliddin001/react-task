import React from "react";
import { LeftSidebar } from "./components/sidebar/leftSidebar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Requests } from "./pages/requests/requests";

function App() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="flex flex-col">
          <div className="flex">
            <LeftSidebar />
            <Requests />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
