import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import solutions from "@/schema/solutions.json";
import { AspectRatio } from "../ui/aspect-ratio";

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Timer logic to auto-expand the next accordion item
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % solutions.length);
    }, 5000); // 5 seconds for each accordion

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LayoutGroup>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 -mb-20 lg:-mb-0">
        {/* Accordion Section */}
        <div className="flex flex-col h-fit border border-muted rounded-xl overflow-hidden md:col-span-1">
          {solutions.map((solution, index) => {
            const isOpen = index === activeIndex;

            return (
              <motion.div
                key={index}
                className="border-t border-b border-muted"
                layout
              >
                {/* Accordion Header */}
                <motion.div
                  className="p-4 flex items-center cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                  layout
                >
                  {solution.icon && (
                    <Image
                      src={solution.icon}
                      alt={`${solution.title} Icon`}
                      width={40}
                      height={40}
                      className="mr-3"
                    />
                  )}
                  <h3 className="text-base md:text-lg font-semibold">
                    {solution.title}
                  </h3>
                </motion.div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      className="px-4 pb-4 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layout
                      transition={{
                        opacity: { duration: 0.5, ease: "easeInOut" },
                        layout: { duration: 0.5, ease: "easeInOut" },
                      }}
                    >
                      <p className="text-sm md:text-base opacity-60">
                        {solution.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Bar for Active Item */}
                {isOpen && (
                  <motion.div
                    key="progress-bar"
                    className="h-[1px] bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    layout
                  />
                )}
              </motion.div>
            );
          })}
        </div>
        {/* Image/Content Section */}
        <div className="flex md:col-span-4">
          <AspectRatio ratio={2 / 1} className="bg-muted rounded-xl w-full">
            {/* Add your background image or content */}
          </AspectRatio>
        </div>
      </div>
    </LayoutGroup>
  );
}
