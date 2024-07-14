interface LineProps {
  title: string;
}

export default function Line({ title }: LineProps) {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <img src="/assets/icons/lineright.svg" />
      <p className="text-3xl font-bold whitespace-nowrap">{title}</p>
      <img src="/assets/icons/lineleft.svg" />
    </div>
  );
}