import { useState } from "react";
interface propstypes {
  text: string;
}

const SeeMoreText = ({ text }: propstypes) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div>
      <div>
        <p className="text-gray-800">
          {showFullText ? text : text.slice(0, 100)}...
          <span className="text-gray-500 transition cursor-pointer">
            {text.length > 100 && (
              <button onClick={toggleShowFullText}>
                {showFullText ? "Show Less" : "See More"}
              </button>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SeeMoreText;
