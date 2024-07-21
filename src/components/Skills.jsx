import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

/* eslint-disable react/prop-types */
const Skills = ({ power }) => {
    const item = Array.from({ length: 6 }, (x, index) => index + 1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 1000);
    }, [isLoading]);

    return (
        <div className="py-6">
            <div className="text-xl md:text-2xl font-medium container mx-auto px-8">My Skills</div>
            <div className="bg-teal-100 dark:bg-teal-950 my-6">
                {isLoading ? (
                    <Marquee pauseOnHover autoFill>
                        {power.map((item, index) => {
                          const theItem = item.split("|")
                            return (
                              <div key={ index } className="flex pr-3 items-center bg-teal-300 dark:bg-stone-900 m-4 text-md rounded-lg hover:underline shadow-none transition-shadow hover:shadow-md dark:hover:shadow-md-dark hover:cursor-pointer">
                                  <img
                                    className="w-auto h-16 aspect-auto p-2"
                                    src={ theItem[0] }
                                    width="240"
                                    height="240"
                                    alt=""/>
                                {theItem[1]}
                                </div>
                            );
                        }) }
                    </Marquee>
                ) : (
                  <div className="container p-4 mx-auto grid lg:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4">
                    { item.map((data, index) => {
                      return (
                        <div
                          className="animate-pulse bg-teal-300 dark:bg-stone-900 uppercase text-md rounded-lg p-5 hover:underline shadow-md transition-shadow dark:hover:shadow-md-dark"
                                    key={index}
                                >
                                    power {data}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
