/* eslint-disable react/prop-types */
import RedirectButton from "./RedirectButton";

const Overview = ({ isLoading, handleLoad }) => {
  return (
    <div className="container mx-auto pb-6 pt-24">
      <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-x md:divide-y-0">
        <div className="basis-full p-6 flex justify-end">
          <img
            src="profile.jpg"
            alt="profile"
            className={`${
              isLoading ? "hidden" : "block"
            } rounded-full object-cover object-top w-72 h-72 shadow-lg shadow-lg-dark brightness-90`}
            onLoad={handleLoad}
            loading="lazy"
          />
          <img
            className={`animate-pulse w-72 h-72 bg-slate-950 rounded-full object-cover fadeOut border-2 ${
              isLoading ? "block" : "hidden"
            }`}
          />
        </div>
        {/* overview start */}
        <div className="basis-full p-6 flex justify-start">
          <div className="w-72 h-72 bg-slate-900 rounded-lg p-4 flex flex-col">
            <div className="text-xl font-medium py-3">
              Pengembang Web dan Game
            </div>
            <div className="text-base">
              Dapat bekerja dalam tim, fast respon, dan berusaha keras.
              Pembelajar dalam pengembangan unity game, web3, dan 3D Modeller
            </div>
            <div className="py-3">
              <RedirectButton
                url={"https://github.com/Garongan"}
                buttonText={"Visit my git"}
              />
            </div>
          </div>
        </div>
        {/* overview end */}
      </div>
    </div>
  );
};

export default Overview;
