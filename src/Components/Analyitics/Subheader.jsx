import React from 'react'

const Subheader = ({ activeTab, setActiveTab }) => {
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }; 

    return (
        <>
            {/* desktop sub-head section */}
            <div className="hidden  md:flex bg-black w-full h-12 border-b border-primary-300 border-t  justify-between px-4 sticky top-[50px] z-10">
                <div className="flex">
                    <button
                        className={`h-full border-r-1 border-primary-300 px-4 transition-colors cursor-pointer flex items-center ${activeTab === "overview"
                            ? "text-white "
                            : "text-zinc-500 hover:text-white"
                            }`}
                        onClick={() => handleTabChange("overview")}
                    >
                        Overview
                    </button>
                    <button
                        className={`h-full px-4 transition-colors flex items-center cursor-pointer ${activeTab === "demographics"
                            ? "text-white "
                            : "text-zinc-500 hover:text-white"
                            }`}
                        onClick={() => handleTabChange("demographics")}
                    >
                        Demographics
                    </button>
                </div>
                <div className="flex w-[88px] items-center border-l text-white hover:text-zinc-400 cursor-pointer border-primary-300 pl-4">
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
        </>
    )
}

export default Subheader