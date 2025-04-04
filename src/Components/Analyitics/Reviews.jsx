import React, { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react';
const Reviews = () => {
    const [showMetricsDropdown, setShowMetricsDropdown] = useState(false);
    return (
        <>
            <div className="col-span-1 px-4 py-2 bg-black border-1 border-primary-300 p-2 mb-3 md:mb-0 w-full shadow-2xl rounded-lg">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Insights</h1>
                        <div className="relative">
                            <button
                                className="flex items-center bg-black px-3 py-1 rounded-lg text-sm border border-primary-300"
                                onClick={() => setShowMetricsDropdown(!showMetricsDropdown)}
                            >
                                <span>Visitors</span>
                                <ChevronDown className="ml-2 w-4 h-4 transition-transform duration-200"
                                    style={{ transform: showMetricsDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </button>
                            {showMetricsDropdown && (
                                <div className="absolute right-0 mt-2 bg-black border border-primary-300 rounded-lg w-40 z-10 shadow-lg">
                                    {['Visitors', 'Connections', 'Interactions', 'Impressions'].map((item) => (
                                        <div
                                            key={item}
                                            className="py-2 px-3 hover:bg-primary-300 cursor-pointer text-sm"
                                            onClick={() => {
                                                setShowMetricsDropdown(false);
                                            }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Rest of your content */}
                    <div className="flex flex-row md:flex-col gap-4 mb-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Founders</h3>
                            <div className="flex items-center mt-2">
                                <h1 className="text-3xl font-bold">7.4k</h1>
                                <div className="flex flex-col ms-3 md:ms-5">
                                    <h5 className="text-emerald-500 text-sm">+0.00%</h5>
                                    <h5 className="text-gray-500 text-sm">(000)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Investors</h3>
                            <div className="flex items-center mt-2">
                                <h1 className="text-3xl font-bold">6.09k</h1>
                                <div className="flex flex-col ms-3 md:ms-5">
                                    <h5 className="text-emerald-500 text-sm">-0.00%</h5>
                                    <h5 className="text-gray-500 text-sm">(000)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-primary-300 border-1 my-4" />
                    <div className="mt-auto">
                        <a href="#" className="flex items-center justify-end text-sm text-gray-500 hover:text-white transition-colors">
                            View all insights
                            <ArrowRight className="ml-1 w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews