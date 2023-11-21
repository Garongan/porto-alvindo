import { useState } from "react";
import "./App.css";
import BreakSection from "./components/BreakSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import { useEffect } from "react";
import Power from "./components/Power";
import { fetchData } from "./services/api";

function App() {
  const [data, setData] = useState([]);
  const [isLoadApi, setIsLoadApi] = useState(true);

  useEffect(() => {
    fetchData().then((response) => {
      const reversedItems = response.slice().reverse();
      setData(reversedItems);
      setIsLoadApi(false);
    });
  }, []);

  const scrollToSection = (targetSection) => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="overview">
        <Header scrollToSection={scrollToSection} />
        <Overview />
        <BreakSection />
        <Power power={data.map((item) => item.power)} />
      </section>
      <section id="portofolio">
        <Portfolio
          data={data}
          isLoadApi={isLoadApi}
          scrollToSection={scrollToSection}
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
