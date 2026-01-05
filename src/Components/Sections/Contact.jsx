import Footer from "../Footer";
import Header from "../Header";
import { Mail, Phone } from 'lucide-react'

function Contact() {
    return (
        <>
            <Header />
            <div className="w-screen h-[90vh] flex justify-center">
                <div className="w-[85%] h-full flex justify-between items-center">
                    <div className="w-1/2 flex flex-col gap-5">
                        <div>
                            <h1 className="pb-[10px] text-[54px] font-black">Get In Touch.</h1>
                            <p className="text-[24px] text-[#4e525a]">Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <div className="border-1 border-gray-300 p-2 rounded-[100%] text-gray-400">
                                    <Mail />
                                </div>
                                <div>gschandhru06@gmail.com</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-1 border-gray-300 p-2 rounded-[100%] text-gray-400">
                                    <Phone />
                                </div>
                                <div>
                                    638209662
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] md:w-[100%] sm:w-[100%] flex items-center lg:justify-end md:justify-center sm:justify-center sm:h-[60%] lg:h-[100%] md:h-[100%]" >
                        <div className="lg:w-[400px] md:w-[600px] sm:w-[300px] sm:h-[300px] p-[40px] border-[1px] border-[#6e06f2] lg:h-[400px] md:h-[600px] rounded-[50%]">
                            <div className="w-[100%] h-[100%] rounded-[50%] border-[1px]">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Contact;