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
      <section className="px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 py-10 gap-x-10 gap-y-10">
        {favoriteProducts.map((product) => (
          <div key={product.id} className="overflow-hidden">
            <Link to={`/products/${product.id}`}>
              <img src={`/images/${product.image}`} alt="" className="h-52" />
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
    </>
  );
};
export default Favorite;
