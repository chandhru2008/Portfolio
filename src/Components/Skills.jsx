function Skills() {
    return (
        <div className='w-screen sm:h-[650px] ld:h-[300px] md:h-[400px] flex justify-center m-1'>
            <div className="w-[85%] mx-auto">
                <h1 className="text-[56px] font-extrabold mb-4">Skills</h1>
                <div className="w-full h-full grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 m-auto text-[18px] font-normal text-[#4E525A]">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-extrabold text-black text-[24px]">Frontend</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java Script</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-extrabold text-black text-[24px]">Backend</h2>
                        <ul>
                            <li>Node Js</li>
                            <li>Happi JS</li>
                            <li>Jave</li>
                            <li>Next Js</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-extrabold text-black text-[24px]">Testing</h2>
                        <ul>
                            <li>Playwright</li>
                            <li>Codeceptjs</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-extrabold text-black text-[24px]">Soft Skills</h2>
                        <ul>
                            <li>Communication</li>
                            <li>Team Work</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;
