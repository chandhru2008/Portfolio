import chatImage from '../assets/chat.svg'
import { useNavigate, useLocation } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    return (<div className="w-screen h-[60px] flex items-center justify-center bg-color-gray">
        <div className="lg:w-[87%] md:w-[95%] h-full flex justify-between items-center p-[10px]">
            <div className='text-[16px] font-bold flex items-center cursor-pointer' onClick={()=> navigate("/")}>Chandhru</div>
            <div className="flex items-center gap-[15px] text-[18px] font-semibold">
                <div className={`hover:text-[#6e06f2] cursor-pointer ${pathname == '/' ? "text-[#6e06f2]" : ""}`} onClick={()=> navigate("/")}>Home</div>
                <div className={`hover:text-[#6e06f2] cursor-pointer ${pathname == '/projects' ? "text-[#6e06f2]" : ""}`} onClick={()=> navigate("/projects")}>Projects</div>
                <div className={`hover:text-[#6e06f2] cursor-pointer ${pathname == '/about' ? "text-[#6e06f2]" : ""}`} onClick={()=> navigate("/about")}>About</div>
            </div>
            <div className="w-[35px] h-[35px] rounded-[50%] bg-black px-[5px]  py-[6px] cursor-pointer" onClick={()=> navigate("/contact")}>
                <img src={chatImage} className="w-[100%] h-[100%]" />
            </div>
        </div>
    </div>);
}
export default Header;