/* eslint-disable react/prop-types */
import {useState} from "react";
import RedirectButton from "./RedirectButton";

const Overview = () => {
	const [ isLoading, setIsLoading ] = useState(true);

	const handleLoad = () => {
		setIsLoading(false);
	};

	return (
		<div className="container mx-auto pb-6 pt-24">
			<div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-x md:divide-y-0">
				<div className="basis-full p-6 flex justify-end">
					<img
						src="profile.webp"
						alt="profile"
						className={ `${
							isLoading ? "hidden" : "block"
						} rounded-full object-cover w-72 h-72 shadow-md dark:shadow-md-dark brightness-90` }
						onLoad={ handleLoad }
						loading="eager"
					/>
					<img
						className={ `animate-pulse w-72 h-72 bg-teal-100 dark:bg-stone-950 dark:border-teal-100 rounded-full fadeOut border-2 border-stone-900 ${
							isLoading ? "block" : "hidden"
						}` }
					/>
				</div>
				{/* overview start */ }
				<div className="basis-full p-6 flex justify-start">
					<div className="w-72 h-72 bg-teal-100 dark:bg-teal-950 rounded-lg p-4 flex flex-col justify-between">
						<div className="text-xl font-medium py-3">
							FullStack Developer
						</div>
						<div className="text-base">
							Work as team, fast response, strong will, and hard worker.
							Developing Web App, Rest API, and Mobile Apps
						</div>
						<RedirectButton
							url={ "https://github.com/Garongan" }
							style="w-full"
							buttonText={ "Visit my git" }
						/>
					</div>
				</div>
				{/* overview end */ }
			</div>
		</div>
	);
};

export default Overview;
