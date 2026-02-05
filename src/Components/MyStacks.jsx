import starImage from "../assets/star.svg";

const ITEMS_PER_ROW = 3;

function MyStacks({ stacks }) {
    const rows = [];

    for (let i = 0; i < stacks.length; i += ITEMS_PER_ROW) {
        rows.push(stacks.slice(i, i + ITEMS_PER_ROW));
    }

    return (
        <div className="relative w-[700px] h-[260px] bg-gray-300 rounded-xl overflow-hidden p-4">
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="absolute left-0 w-full"
                    style={{ top: `${(rowIndex + 1) * 60}px` }}
                >
                    <div
                        className={`marquee ${
                            rowIndex % 2 === 0 ? "marquee-right" : "marquee-left"
                        }`}
                    >
                        {/* duplicate content */}
                        {[...row, ...row].map((item, i) => (
                            <div key={i} className="pill">
                                <img src={starImage} className="w-4 h-4" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MyStacks;
