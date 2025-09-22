"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import footerData from "@/schema/footer.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <footer className="flex flex-col px-6 md:px-10 py-6 pb-14 -mt-20 lg:-mt-0">
      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 w-full justify-between pb-16">
        <h2 className="scroll-m-20 text-3xl font-light tracking-tight lg:text-4xl col-span-1 md:col-span-4">
          Get in Touch.
        </h2>
        <p className="col-span-1 md:col-span-2 text-sm md:text-base">
          Now in over 50 sectors and industries worldwide.
        </p>
        <div className="flex flex-col col-span-1 md:col-span-4 w-full gap-2">
          <div className="flex w-full">
            <Input className="rounded-r-none" placeholder="Email" />
            <Button className="rounded-l-none" variant="secondary">
              Submit
            </Button>
          </div>
          <div className="flex flex-row items-center gap-1">
            <span className="text-xs leading-tight opacity-60 mt-2 lg:mt-0">
              By clicking on “Submit” button, you agree to our Privacy Policy,
              and allow Ternary Solutions, Inc. and its agents and affiliates to
              use this information to contact you.
            </span>
          </div>
        </div>
      </div>

      <Separator className="mb-16" />
      {/* Footer Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col col-span-1 md:col-span-2 gap-3 h-full justify-between">
          <div className="flex flex-col gap-6">
            <Image
              src="/ternary_abstract_mark_white.svg"
              width={35}
              height={35}
              alt="Ternary Logo"
            />
            <span className="font-light leading-5 text-sm md:text-base">
              Delivering products that <br /> shape the lives of millions <br />{" "}
              every single day.
            </span>
          </div>
          <span className="font-light text-xs md:text-sm">
            &copy; Ternary Solutions, Inc. All rights reserved.
          </span>
        </div>

        {/* Column 2: Capabilities */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium opacity-60">CAPABILITIES</span>
          <div className="flex flex-col gap-1">
            {footerData
              .find((section) => section.category === "CAPABILITIES")
              ?.items.map((item, idx) => (
                <Link
                  href={item.link}
                  key={`capabilities-link-${idx}`}
                  className="relative w-fit inline-block"
                  onMouseEnter={() => setHoveredItem(`capabilities-${idx}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span
                    className="font-light text-sm"
                    key={`capabilities-${idx}`}
                  >
                    {item.title}
                  </span>
                  <div className="bottom-0 left-0 w-full h-[1px] overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      animate={{
                        x:
                          hoveredItem === `capabilities-${idx}`
                            ? "0%"
                            : "-100%",
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Column 3: Solutions and Stories */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium opacity-60">SOLUTIONS</span>
            <div className="flex flex-col gap-1">
              {footerData
                .find((section) => section.category === "SOLUTIONS")
                ?.items.map((item, idx) => (
                  <Link
                    href={item.link}
                    key={`solutions-link-${idx}`}
                    className="relative w-fit inline-block"
                    onMouseEnter={() => setHoveredItem(`solutions-${idx}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      className="font-light text-sm"
                      key={`solutions-${idx}`}
                    >
                      {item.title}
                    </span>
                    <div className="bottom-0 left-0 w-full h-[1px] overflow-hidden">
                      <motion.div
                        className="h-full bg-white"
                        animate={{
                          x:
                            hoveredItem === `solutions-${idx}` ? "0%" : "-100%",
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium opacity-60">STORIES</span>
            <div className="flex flex-col gap-1">
              {footerData
                .find((section) => section.category === "STORIES")
                ?.items.map((item, idx) => (
                  <Link
                    href={item.link}
                    key={`story-link-${idx}`}
                    className="relative w-fit inline-block"
                    onMouseEnter={() => setHoveredItem(`story-${idx}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-light text-sm" key={`story-${idx}`}>
                      {item.title}
                    </span>
                    <div className="bottom-0 left-0 w-full h-[1px] overflow-hidden">
                      <motion.div
                        className="h-full bg-white"
                        animate={{
                          x: hoveredItem === `story-${idx}` ? "0%" : "-100%",
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Column 3: Careers and Company */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium opacity-60">CAREERS</span>
            <div className="flex flex-col gap-1">
              {footerData
                .find((section) => section.category === "CAREERS")
                ?.items.map((item, idx) => (
                  <Link
                    href={item.link}
                    key={`careers-link-${idx}`}
                    className="relative w-fit inline-block"
                    onMouseEnter={() => setHoveredItem(`careers-${idx}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-light text-sm" key={`careers-${idx}`}>
                      {item.title}
                    </span>
                    <div className="bottom-0 left-0 w-full h-[1px] overflow-hidden">
                      <motion.div
                        className="h-full bg-white"
                        animate={{
                          x: hoveredItem === `careers-${idx}` ? "0%" : "-100%",
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium opacity-60">COMPANY</span>
            <div className="flex flex-col gap-1">
              {footerData
                .find((section) => section.category === "COMPANY")
                ?.items.map((item, idx) => (
                  <Link
                    href={item.link}
                    key={`company-link-${idx}`}
                    className="relative w-fit inline-block"
                    onMouseEnter={() => setHoveredItem(`company-${idx}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-light text-sm" key={`company-${idx}`}>
                      {item.title}
                    </span>
                    <div className="bottom-0 left-0 w-full h-[1px] overflow-hidden">
                      <motion.div
                        className="h-full bg-white"
                        animate={{
                          x: hoveredItem === `company-${idx}` ? "0%" : "-100%",
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
