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
			<div
				className="flex flex-col sm:flex-row md:flex-row items-center justify-center divide-y md:divide-x sm:divide-y-0">
				<div className="basis-full p-6 flex justify-end">
					<img
						src="profile.webp"
						alt="profile"
						className={ `${
							isLoading ? "hidden" : "block"
						} rounded-full object-cover w-full md:w-72 shadow-md dark:shadow-md-dark brightness-90` }
						onLoad={ handleLoad }
						loading="eager"
					/>
					<div className={ `animate-pulse w-72 h-72 bg-teal-100 dark:bg-stone-950 dark:border-teal-100 rounded-full fadeOut border-2 border-stone-900 ${ isLoading ? "block" : "hidden" }` }>
				</div>
			</div>
			{/* overview start */ }
			<div className="basis-full p-6 flex justify-start">
				<div className="w-72 h-72 bg-teal-100 dark:bg-teal-950 rounded-lg p-4 flex flex-col justify-between">
					<div className="text-xl font-medium py-3">
						Frontend Developer
					</div>
					<div className="text-base">
						I’m programmer with strong will, write clean code, maintainable, and implement the clean architecture, Work as team, fast response, and hard worker.
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
)
	;
};

export default Overview;
