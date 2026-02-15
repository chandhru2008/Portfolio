import Footer from "../Footer";
import MyStory from "../MyStory";
import Header from "../Header";
import MyStacks from "../MyStacks";

function AboutMe() {
    return (
        <>
            <Header />
            <div className="w-screen min-h-screen bg-gray-100 px-6 md:px-12 lg:px-24 py-16">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto mb-20">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8">
                        About me<span className="text-purple-600">.</span>
                    </h1>
                    <div className="border-l-4 border-purple-600 pl-6">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.
                        </p>
                    </div>
                </div>

                {/* Two Column Section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {/* My Stack */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            My Stack.
                        </h2>
                        <div className="bg-gray-300 rounded-3xl p-8 min-h-[300px]">
                            <MyStacks
                                stacks={[
                                    "UI/UX Expertise",
                                    "HTML5/CSS3 Mastery",
                                    "Team Player",
                                    "JavaScript Proficiency",
                                    "Database Management",
                                    "Keeping Abreast of Trends",
                                    "Attention to Detail"
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <MyStory />
            <Footer />
        </>
    )
}

export default AboutMe;