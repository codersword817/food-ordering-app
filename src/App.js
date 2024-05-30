// import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Lazy Loading/ Dynamic Bundling/Chunking /Code Splitting / on Demand Loading

function App() {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    // authorization and get the userName by the api
    const data = {
      name: "Aakash Maroju",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName }}>
        <Header></Header>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
