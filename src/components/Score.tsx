import { useAppSelector } from "../../hooks/hooks";
export default function RetriesCount() {
  const score = useAppSelector((state) => state.quiz.score);
  return (
    <div className="w-fit items-center justify-center whitespace-nowrap rounded-lg bg-chipBlue py-1.5 px-3 font-sans text-lg uppercase text-white">
      <span className="">Score: {score}</span>
    </div>
  );
}
