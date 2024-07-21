/* eslint-disable react/prop-types */
const SampleImg = ({ src, name, aspect }) => {

  return (
    <>
      <img
        src={src}
        alt={name}
        className={`${
          src === "" ? "hidden" : "block"
        } ${aspect} h-[8rem] sm:h-48 md:h-52 xl:h-96`}
        loading="eager"
      />
      <img
        className={`animate-pulse ${aspect} h-[8rem] sm:h-48 md:h-52 xl:h-96 bg-teal-300 rounded-lg fadeOut border-2 ${
          src === "" ? "block" : "hidden"
        }`}
       alt=""/>
    </>
  );
};

export default SampleImg
