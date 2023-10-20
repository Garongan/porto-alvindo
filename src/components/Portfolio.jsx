import { useState } from "react";
import RedirectButton from "./RedirectButton";
import { SampleImg } from "./SampleImg";

/* eslint-disable react/prop-types */
const Portfolio = ({ data, isLoadApi }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="py-6">
      <div className="text-3xl container mx-auto px-8">My Portfolio</div>
      <div className="container mx-auto py-6 px-8">
        {isLoadApi ? (
          <div className="bg-slate-900 animate-pulse w-full h-screen rounded-lg fadeOut"></div>
        ) : (
          <div className="flex flex-col gap-4 overflow-auto h-[32rem] bg-slate-900/50 p-6 rounded-lg">
            {data.map((item, index) => (
              <div
                className="bg-slate-800 p-4 rounded-lg fadeIn"
                key={index}
              >
                <div className="flex flex-row gap-4 justify-center">
                    <SampleImg src={item.imgDekstop} name={item.name} handleLoad={handleLoad} isLoading={isLoading} index={index} />
                    <SampleImg src={item.imgTablet} name={item.name} handleLoad={handleLoad} isLoading={isLoading} index={index} />
                    <SampleImg src={item.imgMobile} name={item.name} handleLoad={handleLoad} isLoading={isLoading} index={index} />
                  </div>
                <img
                  className={`animate-pulse w-full h-32 bg-slate-950 rounded-lg fadeOut border-2 ${
                    isLoading ? "block" : "hidden"
                  }`}
                />
                <div className="divide-y flex flex-col">
                  <div className="cardHeader py-3">
                    <div className="text-lg sm:text-xl">Title: </div>
                    <div className="text-md sm:text-base font-medium">{item.name}</div>
                  </div>
                  <div className="cardContent py-3">
                    <div className="text-lg sm:text-xl">Overview: </div>
                    <div className="text-md sm:text-base">{item.overview}</div>
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
