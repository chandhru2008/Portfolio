import { Github, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
function Footer() {
    const socialMediaIcons = [<Github className='hover:text-[#6e06f2] cursor-pointer' />, <Instagram className='hover:text-[#6e06f2] cursor-pointer' />, <Linkedin className='hover:text-[#6e06f2]  cursor-pointer' />, <Facebook className='hover:text-[#6e06f2] cursor-pointer' />];
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname)
    return (<div className="w-screen min-h-[30vh] flex items-center justify-center bg-color-gray text-[#59555a]">
        <div className="w-full h-full flex flex-wrap justify-between items-center p-[10px] gap-y-[50px] flex-col sm:flex-row sm:items-center  lg:w-[85%] md:w-[95%] sm:justify-center">
            <div className='w-1/2 my-4 sm:text-center'>
                <nav>
                    <ul className='flex items-center gap-6 font-extrabold  text-[18px]'>
                        <li className={`hover:text-[#6e06f2] cursor-pointer ${pathname == '/' ? "text-[#6e06f2]" : ""}`} onClick={()=> navigate("/")}>Home</li>
                        <li className={`hover:text-[#6e06f2] cursor-pointer ${pathname == '/projects' ? "text-[#6e06f2]" : ""}`} onClick={()=> navigate("/projects")}>Projects</li>
                        <li className={`hover:text-[#6e06f2] cursor-pointer ${pathname == '/about' ? "text-[#6e06f2]" : ""}`} onClick={()=> navigate("/about")}>About</li>
                        <li className={`hover:text-[#6e06f2] cursor-pointer ${pathname == '/contact' ? "text-[#6e06f2]" : ""}`} onClick={()=> navigate("/contact")}>Contact</li>
                    </ul>
                </nav>
            </div>
            <div className="w-full sm:w-[80%] md:w-1/2 flex items-center justify-center md:justify-end gap-5 text-[#4E525A] my-4">
                {socialMediaIcons.map((si, index) => (
                    <div key={index}>
                        {si}
                    </div>
                ))}
            </div>
            <div className='w-1/2 '>
                <div className='text-[22px] font-extrabold'>Interested in working together<span className='text-[#7e1df5]'>?</span>
                </div>
                <div className="flex gap-[15px] items-center mt-[20px]  my-4">
                    <button className="bg-[#6e06f2] text-white px-[12px] py-[10px] rounded-[10px] text-[14px] font-bold hover:bg-[#7e1df5] hover:cursor-pointer transition duration-300">
                        Get In Touch
                    </button>
                    <button className="px-[15px] py-[10px] border border-black-200 rounded-[10px] font-bold text-[14px] hover:bg-black hover:text-white hover:cursor-pointer transition duration-300">
                        Browse Projects
                    </button>
                </div>
            </div>
            <div className='w-1/2  my-4 text-end '>
                ©2023 All Rights Reserved.<br />

                Made with 💜 by Luca Da Corte


            </div>
        </div>
    </div>);
}

export default Footer;