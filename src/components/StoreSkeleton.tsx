const StoreSkeleton = () => {
  return (
    <div className="overflow-hidden border border-gray-500 rounded-lg pb-5 shadow-gray-400 shadow-sm animate-pulse">
      <div className="h-52 bg-gray-300"></div>
      <div className="flex flex-col items-start gap-2 pl-2 bg-white pt-3">
        <div className="h-4 w-60 bg-gray-300 rounded"></div>
        <div className="flex gap-5">
          <div className="h-4 w-28 bg-gray-300 rounded"></div>
          <div className="h-4 w-28 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default StoreSkeleton;
