import { useState } from "react";

/* eslint-disable react/prop-types */
const SampleImg = ({ src, name, index, aspect }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <img
        src={src}
        alt={name}
        onLoad={handleLoad}
        className={`${
          isLoading ? "hidden" : "block"
        } ${aspect} h-[8rem] sm:h-48 lg:h-80`}
        loading={`${index > 2 ? "lazy" : "eager"}`}
      />
      <img
        className={`animate-pulse ${aspect} h-[8rem] sm:h-48 lg:h-80 bg-slate-950 rounded-lg fadeOut border-2 ${
          isLoading ? "block" : "hidden"
        }`}
      />
    </>
  );
};

export default SampleImg
