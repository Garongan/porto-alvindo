import { PlayCircle } from "lucide-react";
import { XCircle } from "lucide-react";
import { useState } from "react";
import Youtube from "react-youtube";

/* eslint-disable react/prop-types */
const SampleVideo = ({ src }) => {
  const [isOpen, setIsOpen] = useState(true);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleCLick = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  const VideoPlayer = () => {
    return (
      <div className="w-full sm:p-8 mx-auto sm:mb-0 mb-4 flex justify-center">
        {isOpen ? (
          <ViewButton />
        ) : (
          <div className="relative">
            <button className="absolute -top-3 -right-3" onClick={handleCLick}>
              <XCircle />
            </button>
            <div className="w-full">
              <Youtube
                videoId={src}
                opts={opts}
                className="aspect-video"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  const ViewButton = () => {
    return (
      <button className="relative bg-slate-900" onClick={handleCLick}>
        <img
          src={`https://img.youtube.com/vi/${src}/maxresdefault.jpg`}
          alt="youtube-tumbnail"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/80 rounded-lg border-2 p-1">
          <div className="flex items-center gap-2">
            <PlayCircle /> Play
          </div>
        </div>
      </button>
    );
  };

  return src != null && <VideoPlayer />;
};

export default SampleVideo;
