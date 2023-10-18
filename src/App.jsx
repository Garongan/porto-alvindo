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
    axios.get("https://script.google.com/macros/s/AKfycbz3coSEKmTRtoyjMkVKM9ujoBoEa7bGHZ2Qr559fpO81U3Wx4uQW7Bl6psIAxQAGYPN/exec")
      .then(response => {
        setData(response.data); // Mengatur data ke state React
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  console.log({ data: data });

  return (
    <>
      <Header />
      <Overview />
      <BreakSection />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
