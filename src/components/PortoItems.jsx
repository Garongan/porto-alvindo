/* eslint-disable react/prop-types */

import RedirectButton from "./RedirectButton";
import SampleImg from "./SampleImg";
import SampleVideo from "./SampleVideo";

const PortoItems = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="sm:bg-slate-800 sm:rounded-lg">
          <SampleVideo src={item.youtube} />
          <div className="bg-slate-800 p-4 rounded-lg fadeIn">
            <div className="flex flex-row justify-start gap-2 sm:justify-around sm:gap-0 overflow-x-auto sm:overflow-hidden">
              <SampleImg
                src={item.imgDekstop}
                name={item.name}
                aspect={"aspect-[16/10]"}
              />
              <SampleImg
                src={item.imgTablet}
                name={item.name}
                aspect={"aspect-[18/22.5]"}
              />
              <SampleImg
                src={item.imgMobile}
                name={item.name}
                aspect={"aspect-[9/19.5]"}
              />
            </div>

            <div className="divide-y flex flex-col">
              <div className="cardHeader py-3">
                <div className="text-lg sm:text-xl">Title: </div>
                <div className="text-md sm:text-base font-medium">
                  {item.name}
                </div>
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
        </div>
      ))}
    </>
  );
};

export default PortoItems;
