import Footer from "../Footer";
import MyStory from "../MyStory";
import Header from "../Header";
import MyStacks from "../MyStacks";

function AboutMe() {
    return (
        <>
            <Header />
            <div className="w-screen h-[100vh] md:h-[90vh] lg:h-[80vh]">
                <div className="h-80 w-full flex flex-col justify-center items-center">
                    <div className="w-[85%] h-full">
                        <h1>ABOUT ME</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi eum repudiandae minima, eaque molestiae enim quibusdam nulla illum nesciunt, voluptas molestias tempore ad quidem totam ab voluptatem, quos in!</h3>
                    </div>
                </div>
                <div className="w-[75%] h- flex flex-col gap-3.5 justify-center items-center m-3.5">
                    <h2>My Stack</h2>
                    <MyStacks
                        stacks={[
                            "JavaScript",
                            "React",
                            "TypeScript",
                            "Next.js",
                            "Node.js",
                            "Redis",
                            "Playwright",
                            "k6",
                            "Docker",
                        ]}
                    />
                </div>
            </div>
            <MyStory />
            <Footer />
        </>
    )
}

export default AboutMe;