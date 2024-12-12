"use client";
import { use, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(null)
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex relative h-[50vh] px-auto max-w-6xl overflow-hidden mx-auto w-full">
          {items.map((item, index) => {
            const roundedClass =
              index === 0
                ? "rounded-l-xl"
                : index === items.length - 1
                ? "rounded-r-xl"
                : "";

                const middleClass =
                index === 1 ? isHovered !== null ? "flex-[1] shrink" : "flex-[2]": "flex-[1]";
            return (
              <div
                key={item.id}
                className={`relative ${middleClass} hover:flex-[2] ease-in-out duration-500`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() =>setIsHovered(null)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover h-full ${roundedClass}`}
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
      {/* <HandleImage/> */}
    </>
  );
}
