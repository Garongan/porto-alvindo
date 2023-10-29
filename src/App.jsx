import { useState } from "react";
import "./App.css";
import BreakSection from "./components/BreakSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import { useEffect } from "react";
import axios from "axios";
import Power from "./components/Power";

function App() {
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_API;
  const [isLoadApi, setIsLoadApi] = useState(true);

  useEffect(() => {
    axios
      .get(apiKey)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setIsLoadApi(false);
      });
  }, [apiKey]);

  const scrollToSection = (event) => {
    const targetSection = event.target.getAttribute("data-section");

    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(data);

  return (
    <>
      <section id="overview">
        <Header scrollToSection={scrollToSection} />
        <Overview />
        <BreakSection />
      </section>
      <section id="portofolio">
        <Portfolio data={data} isLoadApi={isLoadApi} />
      </section>
      <Power power={data.map((item) => item.power)} />
      <Footer />
    </>
  );
}

export default App;
