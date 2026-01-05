import MyStacks from "./MyStacks";

function MyStory() {
  return (
    <section className="w-screen bg-color-gray flex items-center justify-center py-10 px-4 min-h-[300px]">
      <div className="w-[85%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
          My Story
        </h1>
        <div className="space-y-4 text-base sm:text-lg text-[#4E525A]">
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consequatur placeat sunt deleniti maxime nihil, ut numquam suscipit perspiciatis illo veritatis odio ab assumenda, laboriosam itaque labore natus deserunt rerum!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rem cum fugiat unde iure sit expedita.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum consequatur esse ducimus vel nisi sunt quidem sint excepturi totam eos, eius, recusandae ratione doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis veniam aliquam amet fugiat totam facere eos est maxime cupiditate, delectus iste enim tempore quia rem error quos pariatur assumenda deserunt?
          </p>
        </div>
      </div>
    </section>
  );
}

export default MyStory;
