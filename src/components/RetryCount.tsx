import { useAppSelector } from "../../hooks/hooks";
export default function RetriesCount() {
  const tries = useAppSelector((state) => state.quiz.triesLeft);
  return (
    <div className="w-fit items-center justify-center whitespace-nowrap rounded-lg bg-chipBlue py-1.5 px-3 font-sans text-lg uppercase text-white">
      <span className="">Retries count: {tries}</span>
    </div>
  );
}
