import { useState } from "react";

/* eslint-disable react/prop-types */
const SampleImg = ({ src, name, aspect }) => {
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
        } ${aspect} h-[8rem] sm:h-48 md:h-52 xl:h-96`}
        loading="eager"
      />
      <img
        className={`animate-pulse ${aspect} h-[8rem] sm:h-48 md:h-52 xl:h-96 bg-teal-300 rounded-lg fadeOut border-2 ${
          isLoading ? "block" : "hidden"
        }`}
      />
    </>
  );
};

export default SampleImg
