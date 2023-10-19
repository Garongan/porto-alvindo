import { useState } from "react";
import "./App.css";
import BreakSection from "./components/BreakSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mengirim permintaan ke Web App Google Apps Script
    axios
      .get("https://sheet.best/api/sheets/94d4a247-d382-4bbd-8f4c-0c35a73405d3")
      .then((response) => {
        setData(response.data); // Mengatur data ke state React
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <Header />
      <Overview />
      <BreakSection />
      <Portfolio data={data} />
      <Footer />
    </>
  );
}

export default App;
