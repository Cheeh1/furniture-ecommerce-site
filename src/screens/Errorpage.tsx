import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className=" text-gray-500">We can't find that page.</p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="text-sm font-semibold py-2 px-4 border border-black rounded-lg shadow-black shadow-sm w-40"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Errorpage;
