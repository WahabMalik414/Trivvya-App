import PlayButton from "../../Assets/Svgs/PlayButton";
import Trivvya from "../../Assets/Svgs/Trivvya";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { resetState } from "../../store/TrivvyaSlice";
function LandingPage() {
  const dispatch = useAppDispatch();

  function handlePlayButtonClick() {
    dispatch(resetState());
  }
  return (
    <div className="flex flex-col bg-TrivvyaBlue items-center justify-center min-h-screen px-10">
      <Trivvya className="mb-8 max-w-3xl" />
      <Link to={`level`} className="cursor-pointer">
        <PlayButton
          className="mt-8 md:mt-28 lg:mt-32 transition duration-300 ease-in-out hover:scale-110 w-36 md:w-full"
          onClick={handlePlayButtonClick}
        />
      </Link>
    </div>
  );
}

export default LandingPage;
