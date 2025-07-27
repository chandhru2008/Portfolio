import Footer from "../Footer";
import MyStory from "../MyStory";
import Header from "../Header";

function AboutMe() {
    return (
        <>
            <Header />
            <div className="w-screnn h-[60vh] flex justify-center">
                <div className="mx-auto w-[85%] h-full mt-[80px]">
                    <h1 className="text-[64px] font-extrabold">About me</h1>
                    <h1 className="border-l-8 border-[#6e06f2] pl-2 text-[24px] font-extrabold">Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.</h1>
                </div>
            </div>
            <MyStory />
            <Footer />
        </>
    )
}

export default AboutMe;