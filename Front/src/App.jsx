import "./index.css";

import Header from "./components/Header";
import Contacts from "./components/Contacts";
if (typeof window !== "undefined" && !window.process) {
  window.process = { env: { NODE_ENV: "development" } };
}

function App() {
  return (
    <>
      <Header />
      <Contacts />
    </>
  );
}

export default App;
