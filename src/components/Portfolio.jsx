import {useState} from "react";
import ReactPaginate from "react-paginate";
import PortoItems from "./PortoItems";

/* eslint-disable react/prop-types */
const Portfolio = ({ data, isLoadApi, scrollToSection }) => {
	const itemsPerPage = 3;
	const [ itemOffset, setItemOffset ] = useState(0);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = data.filter((item) => item.name !== "").slice(itemOffset, endOffset);
	const pageCount = Math.ceil(data.filter(d => d.name !== "").length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % data.length;
		setItemOffset(newOffset);
		scrollToSection("portofolio");
	};

	return (
		<div className="py-6">
			<div className="text-xl md:text-2xl font-medium container mx-auto px-8">My Portfolio</div>
			<div className="container mx-auto py-6 px-8">
				{ isLoadApi ? (
					<div className="bg-teal-100 dark:bg-stone-950 animate-pulse w-full h-screen rounded-lg fadeOut"></div>
				) : (
					<div className="flex flex-col gap-4">
						<PortoItems data={ currentItems }/>
						<ReactPaginate
							breakLabel="..."
							onPageChange={ handlePageClick }
							pageRangeDisplayed={ 3 }
							marginPagesDisplayed={ 2 }
							pageCount={ pageCount }
							renderOnZeroPageCount={ null }
							activeClassName="bg-teal-300 dark:bg-teal-950 px-2 py-1 rounded-md"
							pageClassName="hover:bg-teal-300 dark:hover:bg-teal-950 px-2 py-1 rounded-md"
							nextClassName="hover:bg-teal-300 dark:hover:bg-teal-950 px-2 py-1 rounded-md"
							previousClassName="hover:bg-teal-300 dark:hover:bg-teal-950 px-2 py-1 rounded-md"
							className="flex justify-center gap-2 items-center flex-wrap"
						/>
					</div>
				) }
			</div>
		</div>
	);
};

export default Portfolio;
