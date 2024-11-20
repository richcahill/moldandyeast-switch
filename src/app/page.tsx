"use client";

import { useState } from "react";
import { littleThings, theRot } from "@/lib/copy";
import { motion, AnimatePresence } from "motion/react";

type LittleOrRot = "little" | "rot";

const Poem = ({ littleOrRot }: { littleOrRot: LittleOrRot }) => {
  return (
    <AnimatePresence mode="wait">
      {littleOrRot === "little"
        ? littleThings.map((item, index) => (
            <motion.div
              key={`little-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              {item.type === "h" && (
                <h1 className="text-2xl mb-4">{item.content}</h1>
              )}
              {item.type === "p" && (
                <p className="max-w-prose mb-1">{item.content}</p>
              )}
            </motion.div>
          ))
        : theRot.map((item, index) => (
            <motion.div
              key={`rot-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              {item.type === "h" && (
                <h1 className="text-2xl mb-4">{item.content}</h1>
              )}
              {item.type === "p" && (
                <p className="max-w-prose mb-1">{item.content}</p>
              )}
            </motion.div>
          ))}
    </AnimatePresence>
  );
};

const Switch = ({
  setLittleOrRot,
  littleOrRot,
}: {
  setLittleOrRot: (littleOrRot: LittleOrRot) => void;
  littleOrRot: LittleOrRot;
}) => {
  return (
    <div
      className={`flex relative p-1 rounded-full transition-all duration-1000 ${
        littleOrRot === "little"
          ? "bg-white text-black border border-black"
          : ""
      } ${
        littleOrRot === "rot"
          ? "bg-[#ea3323] text-black border border-[#ea3323]"
          : ""
      }`}
    >
      <motion.div
        className="absolute top-1 bottom-1 z-0 bg-black rounded-full"
        initial={false}
        animate={{
          x: littleOrRot === "little" ? 0 : "100%",
          width: "128px",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
      <button
        onClick={() => setLittleOrRot("little")}
        className={`flex-1 px-6 py-2 flex justify-center w-32 relative ${
          littleOrRot === "little" ? "text-white" : ""
        }`}
      >
        <div className="relative z-10">Light Mode</div>
      </button>
      <button
        onClick={() => setLittleOrRot("rot")}
        className={`flex-1 px-6 py-2 flex justify-center w-32 relative ${
          littleOrRot === "rot" ? "text-[#ea3323]" : ""
        }`}
      >
        <div className="relative z-10">Dark Mode</div>
      </button>
    </div>
  );
};

export default function Home() {
  const [littleOrRot, setLittleOrRot] = useState<LittleOrRot>("little");

  return (
    <div className="h-screen w-screen overflow-y-scroll p-6 bg-black text-sm font-sans">
      <div className="flex flex-col gap-4 max-w-3xl mx-auto h-full">
        <div
          className={`h-full flex-1 transition-all duration-1000 p-8 rounded ${
            littleOrRot === "little" ? "bg-white text-black" : ""
          } ${littleOrRot === "rot" ? "bg-black text-[#ea3323]" : ""}`}
        >
          <Poem littleOrRot={littleOrRot} />
        </div>
      </div>
      <div className="flex justify-center gap-4 fixed bottom-16 w-full">
        <Switch setLittleOrRot={setLittleOrRot} littleOrRot={littleOrRot} />
      </div>
    </div>
  );
}
