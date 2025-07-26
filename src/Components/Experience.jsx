import { useState } from "react";

function Experience() {
    const [tab, setActiveTab] = useState("Lumel")

    return (<div className="w-screen min-h-[200px] flex items-center justify-center bg-color-gray">
        <div className="lg:w-[85%] md:w-[95%] h-full">
            <h1 className="mb-[30px] text-[54px] font-extrabold">Experience</h1>
            <div className="flex gap-[50px]">
                <div className="flex flex-col">
                    <div className={`border-l-3 pl-10 pb-6 text-[24px] hover:cursor-pointer ${tab == "Lumel" ? "border-[#6e06f2] text-[#6e06f2]" : ""}`} onClick={() => setActiveTab("Lumel")}>Lumel</div>
                    <div className={`border-l-3 pl-10 pt-6 text-[24px] hover:cursor-pointer ${tab == "FSSA" ? "border-[#6e06f2] text-[#6e06f2]" : ""}`} onClick={() => setActiveTab("FSSA")}>FSSA</div>
                </div>
                {
                    tab == "FSSA" ?
                        <div className="flex flex-col">
                            <h2 className="mb-2">Acadenmy Trainee<span><br />July - April 2025</span></h2>
                            <ul className="flex flex-col gap-2">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>

                            </ul>
                        </div> :
                        <div className="flex flex-col">
                            <h2 className="mb-2">Product Developer <br /><span>April - present</span></h2>
                            <ul className="flex flex-col gap-2">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae.</li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    </div>);
}

export default Experience;