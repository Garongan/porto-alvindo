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
  const apiKey = process.env.VITE_API;
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

  return (
    <>
      <Header />
      <Overview />
      <BreakSection />
      <Portfolio data={data} isLoadApi={isLoadApi} />
      <Footer />
    </>
  );
}

export default App;
