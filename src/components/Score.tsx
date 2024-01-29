import { useAppSelector } from "../../hooks/hooks";
export default function RetriesCount() {
  const score = useAppSelector((state) => state.quiz.score);
  return (
    <div className="w-fit items-center justify-center whitespace-nowrap rounded-lg bg-chipBlue py-1.5 px-3 font-sans text-xl uppercase text-white cursor-pointer transition duration-300 transform hover:scale-110">
      <span className="">
        Score: <span className="text-green-500 font-bold">{score}</span>
      </span>
    </div>
  );
}
