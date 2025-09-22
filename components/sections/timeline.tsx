import clsx from "clsx";
import timelineEvents from "@/schema/timeline.json";
import { CardTitle } from "../ui/card";
import { motion } from "framer-motion";

export default function Journey({ className }: { className?: string }) {
    return (
        <div className={clsx("w-full relative", className)}>
            {timelineEvents.length > 0 && (
                <div className="relative flex w-full gap-4">
                    {/* Line that runs horizontally */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-muted z-0" />

                    {timelineEvents.map((event, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "relative flex flex-col items-left transform w-full",
                                index % 2 === 0 ? "-translate-y-[54px] xl:-translate-y-[44px]" : "translate-y-[54px] xl:translate-y-[44px]"
                            )}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    {/* Card Above Line */}
                                    <motion.div
                                        className="mb-2 shadow-md py-2 pr-2 rounded-lg text-left"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <span className="text-xs font-medium opacity-60">{event.date}</span>
                                        <CardTitle className="text-sm tracking-tight font-light w-[100%] xl:w-[100%]">{event.title}</CardTitle>
                                    </motion.div>
                                    {/* Dot Positioned Exactly on Line */}
                                    <div className="mr-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                                </>
                            ) : (
                                <>
                                    {/* Dot Positioned Exactly on Line */}
                                    <div className="mr-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                                    {/* Card Below Line */}
                                    <motion.div
                                        className="mt-2 shadow-md py-2 pr-2  rounded-lg text-left"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <span className="text-xs font-medium opacity-60">{event.date}</span>
                                        <CardTitle className="text-sm tracking-tight font-light xl:w-[100%]">{event.title}</CardTitle>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
