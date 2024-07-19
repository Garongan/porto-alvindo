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
            <div className="text-xl md:text-2xl font-medium container mx-auto px-8">My Power</div>
            <div className="bg-teal-100 dark:bg-teal-950 my-6">
                {isLoading ? (
                    <Marquee pauseOnHover autoFill>
                        {power.map((item, index) => {
                            return (
                                <div
                                    className="bg-teal-300 dark:bg-stone-900 m-4 uppercase text-md rounded-lg p-3 hover:underline shadow-none transition-shadow hover:shadow-md dark:hover:shadow-md-dark hover:cursor-pointer"
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
                                    className="animate-pulse bg-slate-950 uppercase text-md rounded-lg p-3 hover:underline shadow-md transition-shadow dark:hover:shadow-md-dark"
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
