import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import verified from "../assets/verified.png";
import dp from "../assets/dp.png";
import gmail from "../assets/gmail.png"
import twitter from "../assets/twitter1.png"
import linkedin from "../assets/linkedin.png"
import vertx from "../assets/vertx.png"
import company from "../assets/company.png"

const Profile = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        console.log("tab", tab);
    };
    return (
        <>
            <div className="min-h-screen w-full bg-black">
                <Header />
                <div className="flex pt-[60px] md:pt-[50px]">
                    <Sidebar />
                    <div className="flex-1 md:ml-[200px] min-h-[calc(100vh-50px)]">
                        {/* desktop sub-head section */}
                        <div className="hidden md:flex bg-black w-full h-12 border-b border-primary-300 justify-between px-4 sticky top-[50px] z-10">
                            <div className="flex">
                                <button
                                    className={`h-full border-r-1 cursor-pointer border-primary-300 px-4 transition-colors flex items-center ${activeTab === "overview"
                                        ? "text-white "
                                        : "text-zinc-500 hover:text-white"
                                        }`}
                                    onClick={() => handleTabChange("overview")}
                                >
                                    Overview
                                </button>
                                <button
                                    className={`h-full border-r-1 cursor-pointer border-primary-300  px-4 transition-colors flex items-center ${activeTab === "profile"
                                        ? "text-white "
                                        : "text-zinc-500 hover:text-white"
                                        }`}
                                    onClick={() => handleTabChange("profile")}
                                >
                                    Profile
                                </button>
                                <button
                                    className={`h-full border-r-1 cursor-pointer border-primary-300  px-4 transition-colors flex items-center ${activeTab === "experience"
                                        ? "text-white "
                                        : "text-zinc-500 hover:text-white"
                                        }`}
                                    onClick={() => handleTabChange("experience")}
                                >
                                    Exprience
                                </button>
                                <button
                                    className={`h-full px-4 transition-colors cursor-pointer flex items-center ${activeTab === "media"
                                        ? "text-white "
                                        : "text-zinc-500 hover:text-white"
                                        }`}
                                    onClick={() => handleTabChange("media")}
                                >
                                    Media
                                </button>
                            </div>
                            <div className="flex w-[88px] items-center border-l border-primary-300 pl-4">
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
                                    className={`flex-1 flex items-center justify-center text-sm ${activeTab === "profile"
                                        ? "text-white  border-b-2 border-white "
                                        : "text-zinc-500"
                                        }`}
                                    onClick={() => handleTabChange("profile")}
                                >
                                    Profile
                                </button>
                                <button
                                    className={`flex-1 flex items-center justify-center text-sm ${activeTab === "experience"
                                        ? "text-white  border-b-2 border-white "
                                        : "text-zinc-500"
                                        }`}
                                    onClick={() => handleTabChange("experience")}
                                >
                                    Experience
                                </button>
                                <button
                                    className={`flex-1 flex items-center justify-center text-sm ${activeTab === "media"
                                        ? "text-white  border-b-2 border-white "
                                        : "text-zinc-500"
                                        }`}
                                    onClick={() => handleTabChange("media")}
                                >
                                    Media
                                </button>
                            </div>
                        </div>

                        {/* main content section */}
                        <div className=" md:pt-0  w-full ">
                            {activeTab === "overview" ? (
                                <div className="bg-primary-400 p-4 md:p-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-y-auto">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Overview
                                    </h3>
                                    {/* profile details */}
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-6 bg-black border border-primary-300 p-4 md:p-6 rounded-lg shadow-2xl mb-4">
                                        <div className="flex flex-col w-full md:flex-row gap-6 md:items-start">
                                            {/* Profile Image */}
                                            <div className="flex-shrink-0  w-[30%]">
                                                <img
                                                    className="w-32 h-32 md:w-40 md:h-40  object-cover "
                                                    src={dp}
                                                    alt="Profile"
                                                />
                                            </div>

                                            {/* Profile Info */}
                                            <div className="flex-1  ">
                                                <div className=" flex md:flex-col md:justify-baseline  justify-between md:px-2 px-4  flex-row">
                                                    <div className="flex-col">
                                                        {/* Name and Verification */}
                                                        <div className="flex items-center justify-between md:pe-10 w-[90%]  mb-2">
                                                            <h1 className="text-2xl md:text-3xl font-bold">Mr A</h1>
                                                            <img className="w-5 h-5" src={verified} alt="Verified" />
                                                        </div>

                                                        {/* Position */}
                                                        <div className="flex  ">
                                                            <h3 className="text-sm md:text-base  text-nowrap text-gray-400 mb-4 me-3">Co-Founder & CEO @ Vertx</h3>
                                                            <img className="h-5 w-5 rounded  mb-[-5px]" src={vertx} alt="vertx" />

                                                        </div>
                                                        {/* Tag */}
                                                        <div className="mb-4">
                                                            <button className="px-2 cursor-pointer rounded bg-white text-black hover: text-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  font-medium">
                                                                Entrepreneur
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Social Icons */}
                                                    <div className="flex justify-end md:ps-0 ps-3  md:justify-start align-top gap-4 md:gap-6 mt-[24%] sm:t-[10%] md:mt-[5%]  lg:mt-[2%]">
                                                        <div className="w-8 cursor-pointer h-8 md:w-10 md:h-10">
                                                            <img className="w-full h-full" src={linkedin} alt="LinkedIn" />
                                                        </div>
                                                        <div className="w-8 cursor-pointer h-8 md:w-10 md:h-10">
                                                            <img className="w-full h-full" src={twitter} alt="Twitter" />
                                                        </div>
                                                        <div className="w-8 h-8 cursor-pointer md:w-10 md:h-10">
                                                            <img className="w-full h-full" src={gmail} alt="Gmail" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    {/* company and experice */}
                                    <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                                        <div className=" bg-black rounded-lg p-3 shadow-2xl border-1 border-primary-300 ">
                                            <div className="flex flex-col p-2 h-[300px] justify-baseline space-y-4">
                                                <h1 className="font-bold mb-2"> Founded Companies</h1>
                                                <h1 className="text-5xl font-bold px-3">02</h1>
                                                {/* vertx */}
                                                <div className="flex justify-between">
                                                    <div className="flex w-[45%] items-center ">
                                                        <img className="w-10 h-10 rounded" src={vertx} alt="" />
                                                        <div className="flex flex-col px-2">
                                                            <div className="flex items-center">
                                                                <span className=" text-[16px] me-2"> Vertx</span>
                                                                <span className=" text-[8px] font-bold py-1 px-2 bg-emerald-500 text-black rounded "> CEO</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span className="text-[12px] mt-0 text-nowrap text-zinc-700 ">Founded in 2025. <span className="text-white font-bold">Fintech</span> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-top flex-1 justify-end">
                                                        <a className="text-[12px] text-zinc-500 hover:text-white transform-text ease-in-out cursor-pointer" href="#">View Profile</a>
                                                    </div>
                                                </div>
                                                {/* company */}
                                                <div className="flex justify-between ">
                                                    <div className="flex w-[45%] items-center ">
                                                        <img className="w-10 h-10 rounded" src={company} alt="company" />
                                                        <div className="flex flex-col px-2">
                                                            <div className="flex items-center">
                                                                <span className=" text-[16px] me-2"> Company</span>
                                                                <span className=" text-[8px] font-bold py-1 px-2 bg-blue-200 text-black rounded "> PROPRECTOR</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <p className="text-[12px]  leading-none mt-0 text-nowrap text-zinc-700 ">Details information <br /> like acquired exit time</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-top flex-1 justify-end">
                                                        <a className="text-[12px] text-zinc-500 hover:text-white transform-text ease-in-out cursor-pointer" href="#">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" bg-black rounded-lg p-3 shadow-2xl border-1 border-primary-300 ">
                                            <div className=" flex flex-col p-2 h-[300px] justify-baseline space-y-3">
                                            <h1 className="font-bold mb-2">Experience</h1>
                                            <h1 className="text-5xl font-[arial] font-bold mb-6 px-3">03</h1>
                                            <div className=" flex flex-col space-y-3">
                                                <div className=" flex justify-between px-2">
                                                   <div className="flex w-[55%] items-center">
                                                   <img className="w-10 h-10 rounded" src={company} alt="company" />
                                                    <span className="text-sm ms-3"> Company 1</span>
                                                   </div>
                                                   <div className="flex flex-1 items-center justify-end ">
                                                   <a className="text-[12px] text-zinc-500 hover:text-white transform-text ease-in-out cursor-pointer" href="#">View Profile</a>
                                                   </div>
                                                </div>
                                                <div className=" flex justify-between px-2">
                                                   <div className="flex w-[55%] items-center">
                                                   <img className="w-10 h-10 rounded" src={company} alt="company" />
                                                    <span className="text-sm ms-3"> Company 2</span>
                                                   </div>
                                                   <div className="flex flex-1 items-center justify-end ">
                                                   <a className="text-[12px] text-zinc-500 hover:text-white transform-text ease-in-out cursor-pointer" href="#">View Profile</a>
                                                   </div>
                                                </div>
                                                <div className=" flex justify-between px-2">
                                                   <div className="flex w-[55%] items-center">
                                                   <img className="w-10 h-10 rounded" src={company} alt="company" />
                                                    <span className="text-sm ms-3"> Company 3</span>
                                                   </div>
                                                   <div className="flex flex-1 items-center justify-end ">
                                                   <a className="text-[12px] text-zinc-500 hover:text-white transform-text ease-in-out cursor-pointer" href="#">View Profile</a>
                                                   </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : activeTab === "profile" ? (
                                <div className="bg-primary-400 p-4 md:p-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-y-auto">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Profile
                                    </h3>
                                </div>
                            ) : activeTab === "experience" ? (
                                <div className="bg-primary-400 p-4 md:p-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-y-auto">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Experience
                                    </h3>
                                </div>
                            ) : (
                                <div className="bg-primary-400 p-4 md:p-8 min-h-[calc(100vh-110px)] md:min-h-[calc(100vh-102px)] overflow-y-auto">
                                    <h3 className="text-2xl font-bold text-white mb-4">Media</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
