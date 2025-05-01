function Home() {
    return (<div className="w-screen h-[90vh]">

        <div className="w-[85%] h-[100%] lg:mx-auto md:mx-[30px] md:min-h-[100%]  flex items-center justify-between flex-wrap">
            <div className="lg:h-[55%] w-[50%] sm:w-[100%] md:w-[100%] md:h-[30%] lg:w-[50%] flex flex-col items-start justify-between ">
                <div className="text-[24px] text-[#4E525A]">Hey,I'am Chan 👋</div>
                <span className="text-[90px] md:text-[80px] lg:text-[90px] sm:text-[90px] font-bold leading-[80px] "><span className="text-[#6e06f2]">Front</span>end Developer</span>
                <div className="mt-[20px] text-[22px] font-normal text-[#4E525A]">I'm a frontend developer based in Italy, I'll help you build beautiful websites your users will love.</div>
                <div className="flex gap-[15px] items-center mt-[20px]">
                    <button className="bg-[#6e06f2] text-white px-[12px] py-[10px] rounded-[10px] text-[14px] font-bold hover:bg-[#7e1df5] hover:cursor-pointer transition duration-300">
                        Get In Touch
                    </button>
                    <button className="px-[15px] py-[10px] border border-black-200 rounded-[10px] font-bold text-[14px] hover:bg-black hover:text-white hover:cursor-pointer transition duration-300">
                        Browse Projects
                    </button>
                </div>
            </div>
            <div className="lg:w-[50%] md:w-[100%] flex items-center justify-end h-[100%]">
                <div className="w-[60%] p-[40px] border-[1px] border-[#6e06f2] h-[60%] rounded-[50%]">
                    <div className="w-[100%] h-[100%] rounded-[50%] border-[1px]">

                    </div>
                </div>
            </div>
        </div>

    </div>);
}
export default Home;