import { useState } from "react";
import RedirectButton from "./RedirectButton";

/* eslint-disable react/prop-types */
const Portfolio = ({ data, isLoadApi }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="py-6">
      <div className="text-3xl container mx-auto px-8">My Portfolio</div>
      <div className="container mx-auto py-6 px-8 ">
        {isLoadApi ? (
          <div className="bg-slate-700 animate-pulse w-full h-screen rounded-lg fadeOut"></div>
        ) : (
          <div className="grid grid-flow-col">
            {data.map((item, index) => (
              <div
                className="bg-slate-700 p-3 rounded-lg w-full fadeIn hover:shadow-lg dark:hover:shadow-lg-dark"
                key={index}
              >
                <img
                  src={item.imgDekstop}
                  alt={item.name}
                  onLoad={handleLoad}
                  className={`${isLoading ? "hidden" : "block"}`}
                  loading={`${index > 2 ? "lazy" : "eager"}`}
                />
                <img
                  className={`animate-pulse w-full h-32 bg-slate-950 rounded-lg fadeOut border-2 ${
                    isLoading ? "block" : "hidden"
                  }`}
                />
                <div className="divide-y flex flex-col">
                  <div className="cardHeader py-3">
                    <div className="text-xl">Title: </div>
                    <div className="text-base font-medium">{item.name}</div>
                  </div>
                  <div className="cardContent py-3">
                    <div className="text-xl">Overview: </div>
                    <div className="text-base">{item.overview}</div>
                  </div>
                  <div className="cardFooter py-3 flex justify-end">
                    <RedirectButton url={item.demo} buttonText={"Link Demo"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
