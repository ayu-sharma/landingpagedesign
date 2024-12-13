"use client";
import { useState } from "react";
import drills from "../public/Images/drills.jpg";
import weights from "../public/Images/weights.jpg";
import yoga from "../public/Images/yoga.jpg";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "STRENGTH",
      image: weights,
    },
    {
      id: 2,
      title: "MOBILITY",
      image: yoga,
    },
    {
      id: 3,
      title: "DRILLS",
      image: drills,
    },
  ];

  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex relative max-w-6xl w-full overflow-hidden rounded-xl">
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;
          const isMiddle = index === 1;

          // Flex logic for hover
          let flexClass = "flex-1";

          if (isMiddle) {
            if (isHovered === 0) {
              flexClass = "flex-[1] origin-left"; // Shrink from the left
            } else if (isHovered === 2) {
              flexClass = "flex-[1] origin-right"; // Shrink from the right
            } else {
              flexClass = "flex-[2]";
            }
          } else if (isHovered === index) {
            flexClass = "flex-[2]"; // Expand hovered section
          } else if (isHovered !== null) {
            flexClass = "flex-[0.8]"; // Shrink non-hovered sections
          }

          const roundedClass = isFirst
            ? "rounded-l-xl"
            : isLast
            ? "rounded-r-xl"
            : "";

          return (
            <div
              key={item.id}
              className={`relative h-[300px] transition-all duration-500 ease-in-out ${flexClass}`}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover ${roundedClass}`}
                width={350}
                height={300}
              />
              <div className="absolute top-3 left-5 text-white text-xl font-semibold">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
