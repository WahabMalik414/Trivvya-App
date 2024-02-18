import { useAppSelector } from "../../hooks/hooks";

export default function RetriesCount() {
  const tries = useAppSelector((state) => state.quiz.triesLeft);
  return (
    <div className="w-fit items-center justify-center whitespace-nowrap rounded-lg bg-chipBlue py-1.5 px-3 font-sans text-xl uppercase text-white cursor-pointer transition duration-300 transform hover:scale-110">
      <span className="">
        Retries count: <span className="text-red-700 font-bold">{tries}</span>
      </span>
    </div>
  );
}
