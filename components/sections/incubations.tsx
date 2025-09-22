"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import cardsData from "@/schema/incubations.json";
import { CardDescription, CardTitle } from "../ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Incubations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  // Update device size
  useEffect(() => {
    const updateDeviceSize = () => {
      setIsSmallDevice(window.innerWidth <= 770); // Adjust breakpoint as needed
    };

    updateDeviceSize();
    window.addEventListener("resize", updateDeviceSize);

    return () => window.removeEventListener("resize", updateDeviceSize);
  }, []);

  return (
    <div className="relative flex flex-wrap justify-between items-end gap-6 w-full ">
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className="overflow-hidden relative rounded-xl border border-muted w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={false}
          animate={{
            width:
              hoveredIndex === index || (hoveredIndex === null && index === 0)
                ? isSmallDevice
                  ? "100%" // Full width on small devices
                  : "64%" // Larger width on large devices
                : isSmallDevice
                ? "70%" // Full width on small devices
                : "34%", // Smaller width on large devices
            height:
              hoveredIndex === index || (hoveredIndex === null && index === 0)
                ? isSmallDevice
                  ? "400px" // Reduced height for small devices
                  : "550px" // Full height for large devices
                : isSmallDevice
                ? "250px" // Smaller height for small devices
                : "500px", // Smaller height for large devices
            zIndex: hoveredIndex === index ? 10 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 75,
          }}
        >
          <Link href={card.buttonLink} className="absolute inset-0 z-30"></Link>
          <motion.div
            className="absolute top-36 left-12 w-[700px] h-[400px] xl:w-[900px] h-[500px]"
            initial={{ opacity: 0 }}
            animate={{
              opacity:
                hoveredIndex === index || (hoveredIndex === null && index === 0)
                  ? 1
                  : 1,
            }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05, // Zoom in by 5% when hovered
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${card.imageUrl}')`,
                backgroundSize: "cover", // Maintains aspect ratio while scaling
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8))",
              }}
            ></div>
          </motion.div>

          <div className="absolute top-6 left-6 space-y-2 z-20">
            <CardTitle className="text-lg font-semibold">
              {card.title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-200">
              {card.description}
            </CardDescription>
          </div>
          <motion.div
            className="absolute top-6 right-6 z-20 border border-muted p-2 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 75,
            }}
          >
            <ArrowUpRight className="opacity-60 hover:opacity-100 text-white" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
