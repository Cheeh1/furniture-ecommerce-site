import { ProductData } from "../data/ProductData";
import { Link } from "react-router-dom";
import Info from "./Info";

const ProductList = () => {
  return (
    <>
      <main className="flex flex-col gap-14">
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="lg:text-3xl text-xl md:text-2xl font-semibold text-center bg-[#dbc8c8] px-10 py-4 rounded-sm">
            Browse through all Items
          </h1>
          <section className="px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-x-10 gap-y-10">
            {ProductData.map((product) => (
              <div key={product.id} className="overflow-hidden">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={`/images/${product.image}`}
                    alt=""
                    className="h-52"
                  />
                </Link>

                <div className="flex flex-col justify-center items-center bg-white pt-3">
                  <Link to={`/products/${product.id}`}>
                    <p className="text-md text-[#969393]">{product.title}</p>
                  </Link>
                  <p className="font-medium text-xl ">{`$ ${product.price}.00`}</p>
                </div>
              </div>
            ))}
          </section>
        </div>

        <section className="flex justify-center gap-5">
          <button className="font-medium rounded-[10px] py-2 px-4 bg-[#dbc8c8]">
            1
          </button>
          <button className="font-medium rounded-[10px] py-2 px-4 bg-[#FAF4F4]">
            2
          </button>
          <button className="font-medium rounded-[10px] py-2 px-4 bg-[#FAF4F4]">
            3
          </button>
          <button className="font-medium rounded-[10px] py-2 px-4 bg-[#FAF4F4]">
            Next
          </button>
        </section>

        <Info />
      </main>
    </>
  );
};
export default ProductList;
