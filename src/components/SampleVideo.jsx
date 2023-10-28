import { useEffect } from "react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const SampleVideo = ({ src }) => {
  const [isNull, setIsNull] = useState(false);

  useEffect(() => {
    if (src == null) setIsNull(true);
  }, [src]);
  return (
    <>
      <div
        className={`flex justify-center p-4 mb-4 bg-slate-900 rounded-lg shadow-lg ${
          isNull ? "hidden" : "block"
        }`}
      >
        <iframe
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="aspect-video w-1/2 rounded-lg"
        />
      </div>
    </>
  );
};

export default SampleVideo;
