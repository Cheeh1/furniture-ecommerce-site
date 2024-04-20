import arrow from "../assets/icons/arrow.svg";

const ProductDetailSkeleton = () => {
  return (
    <>
      <main className="text-gray-700">
        <section className="pt-10 pb-20 gap-10 flex flex-col">
          <div className="flex gap-2 lg:px-60 px-5">
            <div className="bg-gray-300 w-20 h-4"></div>
            <img className="w-3" src={arrow} alt="arrow" />
            <div className="bg-gray-300 w-20 h-4"></div>
            <img className="w-3" src={arrow} alt="arrow" />
            <div className="bg-gray-300 w-20 h-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 justify-center">
            <div className="flex lg:flex-col flex-row gap-5 justify-center">
              <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
              <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
              <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
              <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-300 w-80 h-full rounded-lg"></div>
            </div>

            <div className="flex flex-col px-5 md:px-10 lg:px-0 gap-3 py-2">
              <div className="bg-gray-300 w-64 h-8"></div>
              <div className="bg-gray-300 w-44 h-6"></div>
              <div className="bg-gray-300 w-36 h-6"></div>
              <div className="bg-gray-300 w-40 h-4"></div>
              <div className="bg-gray-300 w-72 h-4"></div>
              <div className="bg-gray-300 w-96 h-32"></div>
              <div className="bg-gray-300 w-80 h-4"></div>
              <div className="bg-gray-300 w-72 h-6"></div>
              <div className="bg-gray-300 w-96 h-10"></div>
              <div className="bg-gray-300 w-64 h-6"></div>
            </div>
          </div>
        </section>

        <hr />

        <section className="flex flex-col items-center gap-12 py-20">
          <div className="font-medium text-xl md:text-2xl lg:text-3xl text-center bg-gray-300 w-64 h-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-4 px-10 md:grid-cols-3  justify-center gap-10 items-center">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="overflow-hidden border border-gray-500 rounded-lg pb-5 shadow-gray-400 shadow-sm hover:shadow-lg"
              >
                <div className="bg-gray-300 w-full h-52 border border-gray-300"></div>

                <div className="flex flex-col items-start gap-2 pl-2 bg-white pt-3">
                  <div className="bg-gray-300 w-54 h-4"></div>
                  <div className="bg-gray-300 w-56 h-4"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <button className="font-medium text-md bg-gray-300 w-32 h-8"></button>
            <hr className="border-black border-1" />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailSkeleton;
