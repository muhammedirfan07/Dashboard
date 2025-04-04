import React, { useState } from "react";
import { lazy, Suspense } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
const Chart = lazy(() => import("../Components/Chart/Chart"));
const Demographics = lazy(() => import("../Components/DemoGraphics/Demographics"));
const Reviews = lazy(() => import("../Components/Analyitics/Reviews"));
import Subheader from "../Components/Analyitics/Subheader";

const Analytics = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="min-h-screen w-full bg-black">
            <Header />
            <div className="flex pt-[60px] md:pt-[50px]">
                <Sidebar />
                <div className="flex-1 md:ml-[200px] min-h-[calc(100vh-50px)]">
                    <Subheader activeTab={activeTab} setActiveTab={setActiveTab} />
                    {/* main content section */}
                    <div className=" md:pt-0  w-full ">
                        {activeTab === "overview" ? (
                            <div className="bg-primary-400 pb-20 md:pb-8 p-4 md:px-8 md:pt-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-x-hidden overflow-y-auto">
                                <h1 className="text-2xl font-bold text-white mb-4">Overview</h1>
                                <div className="text-white">
                                    <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 ">
                                        {/* chart */}
                                        <div className="col-span-2 bg-black border-1 border-primary-300  p-2 mb-3 md:mb-0 w-full overflow-hidden shadow-2xl rounded-lg ">
                                            <Suspense fallback={<div className="text-white">Loading Chart...</div>}>
                                                <Chart />
                                            </Suspense>
                                        </div>
                                        {/* reviews */}
                                        <Suspense fallback={<div className="text-white">Loading Reviews...</div>}>
                                            <Reviews />
                                        </Suspense>
                                    </div>
                                </div>
                                {/* Demographics */}
                                <div className="mt-5 bg-black border-1 border-primary-300 p-2 mb-3 md:mb-0 w-full shadow-lg rounded-lg">
                                    <h1 className="font-bold text-xl ps-4">Demographics</h1>
                                    <Suspense fallback={<div className="text-white">Loading Demographics...</div>}>
                                        <Demographics />
                                    </Suspense>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-primary-400 p-4 md:p-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-y-auto">
                                <h1 className="text-2xl font-bold text-white mb-4">
                                    Demographics
                                </h1>
                                <div className="text-white">
                                    Demographics dashboard content will appear here Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Laudantium
                                    reprehenderit ab illum minus quidem fugit distinctio
                                    molestias. Laborum vero ad explicabo tempore eos magnam ex
                                    cumque est eveniet, rerum velit.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;