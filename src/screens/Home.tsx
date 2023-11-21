import img1 from "/images/rocket-single-seater-1.png";
import img2 from "/images/granite-square-side-table-1.png";
import img3 from "/images/cloud-sofa-three-seater-ottoman-31.png";
import img4 from "/images/asgaard-sofa-big-1.png";
import { ProductData } from "../data/ProductData";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <main className="text-gray-700">
        <section className="flex flex-col-reverse md:flex-row lg:flex-row justify-evenly items-center py-10 text-white bg-gray-600">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-medium w-72">Rocket single seater</h1>
            <Link to="/store">
              <div className="flex flex-col gap-1">
                <p className="font-medium">Shop Now</p>
                <hr className="w-20" />
              </div>
            </Link>
          </div>
          <img className="w-96" src={img1} alt="seater" />
        </section>

        <section className="flex justify-evenly flex-col md:flex-row lg:flex-row pt-14 pb-20 bg-[#dbc8c8] text-gray-700">
          <div className="relative flex items-end">
            <div className="absolute bottom-5 md:bottom-12 lg:bottom-12 left-10 flex flex-col gap-3">
              <h1 className="text-xl font-medium">Side table</h1>
              <Link to="/store">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">View More</p>
                  <hr className="w-20 border-gray-800" />
                </div>
              </Link>
            </div>
            <img className="w-96 pr-10" src={img2} alt="side-table" />
          </div>

          <div className="relative flex items-center">
            <div className="absolute bottom-5 md:bottom-12 lg:bottom-12 left-10 flex flex-col gap-3">
              <h1 className="text-xl font-medium">Sofa seater</h1>
              <Link to="/store">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">View More</p>
                  <hr className="w-20 border-gray-800" />
                </div>
              </Link>
            </div>
            <img className="w-96 pr-10" src={img3} alt="side-table" />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-14">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-3xl font-medium">Top Picks For You</h1>
              <p className="text-[#9F9F9F] text-center font-medium px-8">
                Find a bright ideal to suit your taste with our great selection
                of suspension, floor and table lights.
              </p>
            </div>

            <div className="px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-x-10 gap-y-10">
              {ProductData.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden border border-gray-500 rounded-lg pb-5 shadow-gray-400 shadow-sm hover:shadow-lg"
                >
                  <img
                    src={`/images/${product.image}`}
                    alt={product.title}
                    className="h-52 w-full border border-gray-400"
                  />

                  <div className="flex flex-col items-start gap-2 pl-2 bg-white pt-3">
                    <p className="text-[#969393] w-54 text-center font-semibold">
                      {product.title}
                    </p>
                    <div className="px-1 flex gap-14 items-end">
                      <p className="font-medium text-sm">
                        <span>&#8358;</span>{" "}
                        <span>{`${product.price.toFixed(2)}`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to="/store">
            <div className="flex flex-col items-center gap-1">
              <p className="font-medium">View More</p>
              <hr className="w-20 border-gray-800" />
            </div>
          </Link>
        </section>

        <section className="flex justify-evenly flex-col md:flex-row lg:flex-row items-center bg-gray-700 text-white py-20">
          <img className="w-96 px-5" src={img4} alt="asgaard" />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center">
              <p className="font-medium">New Arrivals</p>
              <h1 className="text-3xl font-bold">Asgaard sofa</h1>
            </div>
            <div className="flex justify-center">
              <Link to="/store">
                <button className="border rounded py-2 px-4 text-[10px] w-28">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-2 py-36 social-image ">
          <h1 className="text-4xl font-bold">Our Instagram</h1>
          <p className="text-sm">Follow our store on Instagram</p>
          <Link to="/">
            <button className="border-none rounded-xl py-2 px-14 bg-[#FAF4F4] text-sm shadow-gray-300 shadow-lg">
              Follow Us
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};
export default Home;
