"use client";
import { useState } from "react";
import Image from "next/image";
import drills from "../public/Images/drills.jpg";
import weigths from "../public/Images/weights.jpg";
import yoga from "../public/Images/yoga.jpg";
export default function Home() {
  const items = [
    {
      id: 1,
      title: "STRENGTH",
      image: weigths,
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

  const [isExpanded, setIsExpanded] = useState(2);

  console.log("isExpanded", isExpanded);
  const handleClick = (id) => {
    console.log("clicked", id);
    if (isExpanded) {
      setIsExpanded(id);
    }
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-center h-[100vh]">
          {items.map((item, index) => {
            const roundedClass =
              index === 0
                ? "rounded-l-xl"
                : index === items.length - 1
                ? "rounded-r-xl"
                : "";
            return (
              <div
                key={item.id}
                className={`aspect-auto ${roundedClass} relative`}
              >
                <Image
                  onClick={() => handleClick(item.id)}
                  src={item.image}
                  alt={item.title}
                  className={`${roundedClass} ${
                    isExpanded === item.id ? "" : ""
                  }`}
                  width={350}
                  height={300}
                />
                <div className="absolute top-1 left-3 text-white">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
