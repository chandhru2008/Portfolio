import Footer from "../Footer";
import MyStory from "../MyStory";
import Header from "../Header";

function AboutMe() {
    return (
        <>
            <Header />
            <div className="w-screen h-[100vh] md:h-[90vh] lg:h-[80vh]"></div>
            <MyStory />
            <Footer />
        </>
    )
}

export default AboutMe;