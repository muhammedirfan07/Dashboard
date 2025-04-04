import React from "react";
import { WorldMapDemo } from "../worldmap/WorldMapDemo";
import { ArrowRight } from 'lucide-react';
import Flag from "react-world-flags";

const countries = [
    { code: "IN", name: "India", percentage: 40, color: "purple" },
    { code: "US", name: "USA", percentage: 25, color: "yellow" },
    { code: "CA", name: "Canada", percentage: 15, color: "gold" },
    { code: "AE", name: "UAE", percentage: 7, color: "green" },
];

const Demographics = () => {
    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:p-0 p-3 gap-0 md:gap-4">
                <div className="col-span-2">
                    <WorldMapDemo countries={countries} />
                </div>
                <div className="col-span-1 px-2 pt-5">
                    <div className="space-y-4 pb-6">
                        {countries.map((country) => (
                            <div key={country.code} className="flex items-center gap-1">
                                <div className="w-8 h-6 relative overflow-hidden rounded-sm">
                                    <Flag 
                                        code={country.code} 
                                        className="w-full h-full object-cover"
                                        fallback={<span className="text-xs">Flag</span>}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <span>{country.name}</span>
                                        <span>{country.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full  overflow-hidden">
                                        <div
                                            className="h-full"
                                            style={{
                                                width: `${country.percentage}%`,
                                                backgroundColor: country.color,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr className="my-4 border-1 mx-5 border-primary-300" />
                    <div className="mt-auto">
                        <a href="#" className="flex items-center justify-end text-sm text-gray-500 hover:text-white transition-colors">
                            View all insights
                            <ArrowRight className="ml-1 w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Demographics;