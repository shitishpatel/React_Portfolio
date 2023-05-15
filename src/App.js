import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
// import Footer from "./components/Footer";
// import Service from "./components/Service";
// import Contact from "./components/Contact";

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/home.css";
// import "./styles/service.css";
// import "./styles/contact.scss";
// import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route/>
        <Route path="/" element={<Home />} />
        {/* <Route path="/service" element={<Service />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;