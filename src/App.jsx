import "./App.css";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="p-0 m-0">
      <Header />
      <div className="">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
