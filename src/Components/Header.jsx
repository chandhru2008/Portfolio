import chatImage from '../assets/chat.svg'
function Header() {
    return (<div className="w-screen h-[60px] flex items-center justify-center bg-color-gray">
        <div className="lg:w-[87%] md:w-[95%] h-full flex justify-between items-center p-[10px]">
            <div className='text-[16px] font-bold flex items-center'>Chandhru</div>
            <div className="flex items-center gap-[15px] text-[18px] font-semibold">
                <div>Home</div>
                <div>Projects</div>
                <div>About</div>
            </div>
            <div className="w-[35px] h-[35px] rounded-[50%] bg-black px-[5px]  py-[6px]">
                <img src={chatImage} className="w-[100%] h-[100%]" />
            </div>
        </div>
    </div>);
}
export default Header;