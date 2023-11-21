import { useEffect } from "react";
import { useState } from "react";
import Youtube from 'react-youtube'

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
        <Youtube videoId={src} className="aspect-video rounded-lg" />
      </div>
    </>
  );
};

export default SampleVideo;
