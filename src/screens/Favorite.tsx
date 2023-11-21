import { useContext } from "react";
import { ProductData } from "../data/ProductData";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../context/FavoriteContext";

const Favorite = () => {
  const { favorites } = useContext(FavoriteContext);

  const favoriteProducts = ProductData.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <>
      <main>
        <h1 className="lg:text-3xl text-xl md:text-2xl font-semibold text-center bg-[#dbc8c8] px-10 py-4 rounded-sm text-gray-700">
          Favorited Items
        </h1>
        <section className="px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-10 gap-x-10 gap-y-10">
          {favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden border rounded-lg pb-5 shadow-gray-400 shadow-sm hover:shadow-lg"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={`/images/${product.image}`}
                  alt={product.title}
                  className="h-52 w-full border"
                />
              </Link>

              <div className="flex flex-col items-start gap-2 pl-2 bg-white pt-3">
                <p className="text-[#969393] w-54 text-center font-semibold">
                  {product.title}
                </p>
                <div className="px-1 flex gap-14 items-end">
                  <p className="font-medium text-sm">{`$ ${product.price}.00`}</p>
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
      </main>
    </>
  );
};
export default Favorite;
