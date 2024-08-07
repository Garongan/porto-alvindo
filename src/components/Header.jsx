/* eslint-disable react/prop-types */

import {useState} from "react";

const Header = ({ scrollToSection }) => {
	const [ theme, setTheme ] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light");

	function changeTheme(value) {
		console.log(value);
		if (value === "Dark") {
			document.documentElement.classList.add("dark");
			setTheme("Dark");
		} else {
			document.documentElement.classList.remove("dark");
			setTheme("Light");
		}
	}

	return (
		<div className="bg-teal-100 dark:bg-teal-950 dark:shadow-md-dark fixed top-0 w-full z-10 shadow-md">
			<div className="container mx-auto flex flex-col sm:flex-row gap-4 py-3 px-8">
				<div className="md:text-xl justify-start basis-full">
					Alvindo Tri Jatmiko
				</div>
				<ul className="list-none flex items-center gap-4 text-sm md:text-base justify-end basis-full">
					<li className="cursor-pointer" onClick={ () => changeTheme(theme === "Dark" ? "Light" : "Dark") }>
						{
							theme === "Dark" ? (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
									<path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd"/>
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
									<path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"/>
								</svg>
							)
						}
					</li>
					<li>
						<button
							onClick={ () => scrollToSection("overview") }
							className="hover:underline"
						>
							Overview
						</button>
					</li>
					<li>
						<button
							onClick={ () => scrollToSection("portofolio") }
							className="hover:underline"
						>
							Portfolio
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
