import React from "react";
import { motion } from "framer-motion";
import capabilities from "@/schema/capabilities.json";

export default function Capabilities() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-0 -mb-20 lg:-mb-0"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1, // Stagger the entrance of each card
          },
        },
      }}
    >
      {capabilities.map((capability) => (
        <motion.div
          key={capability.id}
          className="border border-muted w-full rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 pb-8 sm:pb-12"
          variants={{
            hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
            visible: { opacity: 1, y: 0 }, // Animate to visible and original position
          }}
          whileHover={{ scale: 1.05 }} // Slightly scale up on hover
        >
          <h3 className="text-base md:text-lg font-semibold mb-2">
            {capability.title}
          </h3>
          <p className="opacity-60 text-xs md:text-sm">
            {capability.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
