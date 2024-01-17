import React from "react";
import Level from "../../Assets/Svgs/Level";

export default function LevelPage() {
  return (
    <div className="flex bg-TrivvyaBlue h-screen">
      <div className="flex-1 justify-center items-center">
        <p className="font-sans text-6xl font-bold leading-tight text-white text-center mt-4">
          PICK THE LEVEL
        </p>
        <div className="flex flex-col items-center gap-y-5 mt-10">
          <Level difficulty="EASY" />
          <Level difficulty="MEDIUM" />
          <Level difficulty="HARD" />
        </div>
      </div>
    </div>
  );
}
