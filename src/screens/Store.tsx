import { useState } from "react";
import { ProductData } from "../data/ProductData";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Info from "../components/Info";
import filter from "../assets/icons/filter-icon.svg";
import grid from "../assets/icons/grid-big-round.svg";
import view from "../assets/icons/view-list.svg";

const Store = () => {
  const itemPerPage = 8; //Number of items to display per page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentProducts = ProductData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(ProductData.length / itemPerPage)
    ) {
      setCurrentPage(pageNumber);
    } else if (pageNumber <= 0) {
      setCurrentPage(Math.ceil(ProductData.length / itemPerPage));
    } else {
      setCurrentPage(1);
    }
  };

  return (
    <>
      <Header children="Store" />

      <main className="flex flex-col gap-14 text-gray-700">
        <div className="flex flex-col gap-10 pt-10">
          <div className="flex justify-between flex-col md:flex-row lg:flex-row gap-2 md:gap-0 lg:gap-0 items-center bg-[#dbc8c8] px-2 md:px-10 lg:px-10 py-4 rounded-sm text-gray-800">
            <div className="flex items-center gap-3">
              <img src={filter} alt="filter" />
              <p className="font-medium">Filter</p>
              <img src={grid} alt="grid" />
              <img src={view} alt="view-list" />
              <hr className="border py-4" />
              <p className="text-sm">Showing 1-8 of 16 results</p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-3 items-center">
                <p className="font-medium">Show</p>
                <p className="bg-white py-1 px-2 text-[#9F9F9F]">8</p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="font-medium">Short by</p>
                <p className="bg-white py-1 px-3 text-[#9F9F9F]">Default</p>
              </div>
            </div>
          </div>
          <section className="px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-10">
            {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden border border-gray-500 rounded-lg pb-5 shadow-gray-400 shadow-sm hover:shadow-lg"
                  >
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={`/images/${product.image}`}
                        alt={product.title}
                        className="h-52 w-full border border-gray-500"
                      />
                    </Link>

                    <div className="flex flex-col items-start gap-2 pl-2 bg-white pt-3">
                      <p className="text-[#969393] w-54 text-center font-semibold">
                        {product.title}
                      </p>
                      <div className="px-1 flex gap-14 items-end">
                        <p className="font-medium text-sm">
                          <span>&#8358;</span>{" "}
                          <span>{`${product.price.toFixed(2)}`}</span>
                        </p>
                        <Link to={`/products/${product.id}`}>
                          <button className="text-sm font-medium text-gray-800 bg-[#dbc8c8] py-1 px-2 rounded-lg">
                            View details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </section>
        </div>

        {/* Paginate controls */}
        <section className="flex justify-center gap-5">
          {Array.from(
            { length: Math.ceil(ProductData.length / itemPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`font-medium rounded-[10px] py-2 px-4 ${
                  currentPage === index + 1 ? "bg-[#dbc8c8]" : "bg-[#FAF4F4]"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={() => paginate(currentPage + 1)}
            className="font-medium rounded-[10px] py-2 px-4 bg-[#FAF4F4] hover:bg-[#dbc8c8]"
          >
            Next
          </button>
        </section>
        <Info />
      </main>
    </>
  );
};
export default Store;
