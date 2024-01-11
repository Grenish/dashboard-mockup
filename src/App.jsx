import React from "react";
import { Dashboard, SideNav } from "./components";

const App = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse">
      <SideNav />
      <Dashboard />
    </div>
  );
};

export default App;
