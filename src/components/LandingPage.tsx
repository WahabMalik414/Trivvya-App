import React from "react";
import PlayButton from "../../Assets/Svgs/PlayButton";
import Trivvya from "../../Assets/Svgs/Trivvya";

function LandingPage() {
  return (
    <div className="flex bg-TrivvyaBlue h-screen">
      <div className="flex flex-col m-auto items-center justify-center">
        <Trivvya />
        <PlayButton className="mt-28" />
      </div>
    </div>
  );
}

export default LandingPage;
