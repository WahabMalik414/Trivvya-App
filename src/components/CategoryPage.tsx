import React, { useContext } from "react";
import Level from "../../Assets/Svgs/Level";
import { TrivvyaContextType, TrivvyaContext } from "../TrivvyaContext";

export default function CategoryPage() {
  const { setCategory } = useContext(TrivvyaContext) as TrivvyaContextType;

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 min-h-screen bg-TrivvyaBlue">
        <p className="font-sans text-6xl font-bold leading-tight text-white text-center">
          CHOOSE A CLUE
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-5 px-5  md:gap-x-5">
          <div className="flex flex-col items-center gap-y-5">
            <Level difficulty="General Knowledge 9" className="h-28 md:h-30" />
            <Level difficulty="Books 10" className="h-28 md:h-30" />
            <Level difficulty="Video Games 15 " className="h-28 md:h-30" />
            <Level difficulty="Science & Nature 17" className="h-28 md:h-30" />
            <Level difficulty="Computers 18" className="h-28 md:h-30" />
          </div>
          <div className="flex flex-col items-center mt-5 gap-y-5 md:mt-0">
            <Level difficulty="Sports 21" className="h-28 md:h-30" />
            <Level difficulty="Geography 22" className="h-28 md:h-30" />
            <Level difficulty="History 23" className="h-28 md:h-30" />
            <Level difficulty="Art 25" className="h-28 md:h-30" />
            <Level difficulty="Animals 27" className="h-28 md:h-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
