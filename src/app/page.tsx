"use client";

import { Fragment, useState } from "react";
import { littleThings, theRot } from "@/lib/copy";

type LittleOrRot = "little" | "rot";

const Poem = ({ littleOrRot }: { littleOrRot: LittleOrRot }) => {
  return (
    <>
      {littleOrRot === "little"
        ? littleThings.map((item, index) => (
            <div key={index}>
              {item.type === "h" && (
                <h1 className="text-white text-2xl mb-4">{item.content}</h1>
              )}
              {item.type === "p" && (
                <p className="text-white max-w-prose mb-1">{item.content}</p>
              )}
            </div>
          ))
        : theRot.map((item, index) => (
            <div key={index}>
              {item.type === "h" && (
                <h1 className="text-white text-2xl mb-4">{item.content}</h1>
              )}
              {item.type === "p" && (
                <p className="text-white max-w-prose mb-1">{item.content}</p>
              )}
            </div>
          ))}
    </>
  );
};

export default function Home() {
  const [littleOrRot, setLittleOrRot] = useState<LittleOrRot>("little");

  return (
    <div className="h-screen w-screen overflow-y-scroll p-6">
      <div className="flex flex-col gap-4 max-w-3xl mx-auto h-full">
        <div className="bg-red-700 h-full flex-1 p-8 rounded">
          <Poem littleOrRot={littleOrRot} />
        </div>
      </div>
      <div className="flex justify-center gap-4 fixed bottom-10 w-full">
        <button onClick={() => setLittleOrRot("little")}>Little</button>
        <button onClick={() => setLittleOrRot("rot")}>Rot</button>
      </div>
    </div>
  );
}
