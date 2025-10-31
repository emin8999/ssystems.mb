import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/index.jsx";
import Contacts from "./components/Contacts";
import Services from "./pages/Services/Service.jsx";
import AboutUs from "./pages/AboutUs/index.jsx"

if (typeof window !== "undefined" && !window.process) {
  window.process = { env: { NODE_ENV: "development" } };
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="services"  element={<Services />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="aboutUs" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
