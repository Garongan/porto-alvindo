/* eslint-disable react/prop-types */
export const SampleImg = ({ src, name, handleLoad, isLoading, index }) => {
  return (
    <img
      src={src}
      alt={name}
      onLoad={handleLoad}
      className={`${isLoading ? "hidden" : "block"} w-auto h-[4.5rem] sm:h-48 lg:h-80`}
      loading={`${index > 2 ? "lazy" : "eager"}`}
    />
  );
};
