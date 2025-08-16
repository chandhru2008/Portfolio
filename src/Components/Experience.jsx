import { useState } from "react";

function Experience() {
    const [tab, setActiveTab] = useState("Lumel")

    return (<div className="w-screen min-h-[250px] flex items-center justify-center bg-color-gray">
        <div className="lg:w-[85%] md:w-[95%] h-full">
            <h1 className="mb-[30px] text-[54px] font-extrabold">Experience</h1>
            <div className="flex gap-[150px]">
                <div className="flex flex-col">
                    <div className={`border-l-3 pl-10 pb-8 text-[24px] hover:cursor-pointer ${tab == "Lumel" ? "border-[#6e06f2] text-[#6e06f2]" : ""}`} onClick={() => setActiveTab("Lumel")}>Lumel</div>
                    <div className={`border-l-3 pl-10 pt-2 pb-8 text-[24px] hover:cursor-pointer ${tab == "FSSA" ? "border-[#6e06f2] text-[#6e06f2]" : ""}`} onClick={() => setActiveTab("FSSA")}>FSSA</div>
                </div>
                {
                    tab == "FSSA" ?
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <h2 className="font-extrabold text-[24px]">Acadenmy Trainee<span className="text-[#6e06f2]"> @FSSA</span></h2>
                                <span className="text-[12px]">July - April 2025</span>
                            </div>
                            <ul className="flex flex-col gap-2 ">
                                <div className="flex items-center gap-2">
                                    <img src="/tick.svg" alt="tick" />
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/tick.svg" alt="tick" />
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                </div>
                            </ul>
                        </div> :
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <h2 className="font-extrabold text-[24px]">Product Developer<span className="text-[#6e06f2]"> @Lumel</span></h2>
                                <span className="text-[12px]">April - present</span>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <img src="/tick.svg" alt="tick" />
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/tick.svg" alt="tick" />
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                </div>
                            </ul>
                        </div>
                }
            </div>
        </div>
    </div>);
}

export default Experience;