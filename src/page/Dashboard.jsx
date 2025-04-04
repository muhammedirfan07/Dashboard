import React, { useState } from "react";
;
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="min-h-screen w-full bg-black">
            <Header />
            <div className="flex pt-[60px] md:pt-[50px]">
                <Sidebar />
                <div className="flex-1 md:ml-[200px] min-h-[calc(100vh-50px)]">
                    {/* desktop sub-head section */}
                    <div className="hidden md:flex bg-black w-full h-12 border-b border-primary-300 justify-between px-4 sticky top-[50px] z-10">
                        <div className="flex">
                            <button
                                className={`h-full border-r-1 border-primary-300 px-4 transition-colors flex items-center ${activeTab === "overview"
                                        ? "text-white "
                                        : "text-zinc-500 hover:text-white"
                                    }`}
                                onClick={() => handleTabChange("overview")}
                            >
                                Overview
                            </button>
                            <button
                                className={`h-full px-4 transition-colors flex items-center ${activeTab === "demographics"
                                        ? "text-white "
                                        : "text-zinc-500 hover:text-white"
                                    }`}
                                onClick={() => handleTabChange("demographics")}
                            >
                                Demographics
                            </button>
                        </div>
                        <div className="flex w-[88px] items-center  text-white hover:text-gray-400' border-l border-primary-300 pl-4">
                            <h1>More</h1>
                        </div>
                    </div>

                    {/* mobile sub-head section */}
                    <div className="md:hidden bg-black w-full h-12 border-b border-primary-300 sticky top-[60px] z-10">
                        <div className="flex  h-full">
                            <button
                                className={`flex-1  flex items-center justify-center text-sm ${activeTab === "overview"
                                        ? "text-white  border-b-2 border-white"
                                        : "text-zinc-500"
                                    }`}
                                onClick={() => handleTabChange("overview")}
                            >
                                Overview
                            </button>
                            <button
                                className={`flex-1 flex items-center justify-center text-sm ${activeTab === "demographics"
                                        ? "text-white  border-b-2 border-white "
                                        : "text-zinc-500"
                                    }`}
                                onClick={() => handleTabChange("demographics")}
                            >
                                Demographics
                            </button>
                        </div>
                    </div>

                    {/* main content section */}
                    <div className=" md:pt-0  w-full ">
                        {activeTab === "overview" ? (
                            <div className="bg-primary-400 p-4 md:p-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-y-auto">
                            <h1 className="text-2xl font-bold text-white mb-4">
                                Overview
                            </h1>
                            <p className="text-white mb-4 ">
                                Click the <span className="font-bold text-amber-200">Profile</span> tab and <span className="font-bold text-amber-200">Analytics</span> tab  to view your analytics data and User profile.
                            </p>
                           
                        </div>
                        ) : (
                            <div className="bg-primary-400 p-4 md:p-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-y-auto">
                                <h1 className="text-2xl font-bold text-white mb-4">
                                    Demographics
                                </h1>
                                
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
