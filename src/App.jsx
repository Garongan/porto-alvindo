import {useEffect, useState} from "react";
import "./App.css";
import BreakSection from "./components/BreakSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills.jsx";
import {fetchData} from "./services/api";

function App() {
	const [ data, setData ] = useState([]);
	const [ isLoadApi, setIsLoadApi ] = useState(true);

	const scrollToSection = (targetSection) => {
		const section = document.getElementById(targetSection);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		fetchData().then((response) => {
			const reversedItems = response.slice().reverse();
			setData(reversedItems);
			setIsLoadApi(false);
		});
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	return (
		<div className="min-h-screen max-w-screen overflow-hidden text-stone-900 bg-stone-50 dark:text-stone-50 dark:bg-stone-900">
			<section id="overview">
				<Header scrollToSection={ scrollToSection }/>
				<Overview/>
				<BreakSection/>
				<Skills power={ data.map((item) => item.power) }/>
			</section>
			<section id="portofolio">
				<Portfolio
					data={ data }
					isLoadApi={ isLoadApi }
					scrollToSection={ scrollToSection }
				/>
			</section>
			<Footer/>
		</div>
	);
}

export default App;
