import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

/* eslint-disable react/prop-types */
const Power = ({ power }) => {
    const item = Array.from({ length: 6 }, (x, index) => index + 1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 1000);
    }, [isLoading]);

    return (
        <div className="py-6">
            <div className="text-3xl container mx-auto px-8">My Power</div>
            <div className="bg-slate-900/50 my-6">
                {isLoading ? (
                    <Marquee pauseOnHover gradient gradientColor="#020617" autoFill>
                        {power.map((item, index) => {
                            return (
                                <div
                                    className="bg-slate-950 m-4 uppercase text-md rounded-lg p-3 hover:underline shadow-lg transition-shadow hover:shadow-lg-dark"
                                    key={index}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </Marquee>
                ) : (
                    <div className="container p-4 mx-auto grid lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4">
                        {item.map((index) => {
                            return (
                                <div
                                    className="animate-pulse bg-slate-950 uppercase text-md rounded-lg p-3 hover:underline shadow-lg transition-shadow hover:shadow-lg-dark"
                                    key={index}
                                >
                                    power
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Power;
