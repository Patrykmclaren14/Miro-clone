import Image from "next/image"

const EmptySearch = () => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col items-center
      justify-center">
        <Image
          src="/empty-search.svg"
          alt="empty-search"
          height={140}
          width={140}
        />
        <h2 className="text-2xl font-semibold mt-6">
          No result found!
        </h2>
        <p className="text-muted-foreground textg-sm mt-2">
          Try seraching for something else
        </p>
      </div>
    </div>
  );
};

export default EmptySearch;