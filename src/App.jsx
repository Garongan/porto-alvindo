import "./App.css";
import BreakSection from "./components/BreakSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";

function App() {
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
