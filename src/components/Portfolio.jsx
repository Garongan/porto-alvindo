import RedirectButton from "./RedirectButton";
import SampleImg from "./SampleImg";
import SampleVideo from "./SampleVideo";

/* eslint-disable react/prop-types */
const Portfolio = ({ data, isLoadApi }) => {
  return (
    <div className="py-6">
      <div className="text-3xl container mx-auto px-8">My Portfolio</div>
      <div className="container mx-auto py-6 px-8">
        {isLoadApi ? (
          <div className="bg-slate-900 animate-pulse w-full h-screen rounded-lg fadeOut"></div>
        ) : (
          <div className="flex flex-col gap-4 overflow-auto h-[42rem] bg-slate-900/50 p-6 rounded-lg">
            {data.map((item, index) => (
              <div className="bg-slate-800 p-4 rounded-lg fadeIn" key={index}>
                <SampleVideo src={item.youtube} />
                <div className="flex flex-row justify-start gap-2 sm:justify-around sm:gap-0 overflow-x-auto sm:overflow-hidden">
                  <SampleImg
                    src={item.imgDekstop}
                    name={item.name}
                    index={index}
                    aspect={"aspect-[16/10]"}
                  />
                  <SampleImg
                    src={item.imgTablet}
                    name={item.name}
                    index={index}
                    aspect={"aspect-[18/22.5]"}
                  />
                  <SampleImg
                    src={item.imgMobile}
                    name={item.name}
                    index={index}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
