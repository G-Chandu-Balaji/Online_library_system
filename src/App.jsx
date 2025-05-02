import { Provider } from "react-redux";
import "./App.css";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="p-0 m-0 bg-gradient-to-br from-white to-gray-500 min-h-[100vh]">
      <Header />
      <Provider store={appStore}>
        <div className="">
          <Outlet />
        </div>
      </Provider>
      <Footer />
    </main>
  );
}

export default App;
