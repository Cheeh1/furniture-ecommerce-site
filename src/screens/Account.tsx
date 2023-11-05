import Header from "../components/Header";
import Info from "../components/Info";

const Account = () => {
  return (
    <>
      <Header children="My Account" />
      <main className="py-16 flex flex-col md:flex-row lg:flex-row gap-10 px-5 justify-evenly">
        <section className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Login In</h1>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="">
                Email Address
              </label>
              <input type="text" name="" id="" className="rounded-lg md:w-72" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="">
                Password
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
              <p className="text-[10px] font-light">Lost Your Password?</p>
            </div>
            <button className="text-sm py-2 border border-black rounded-lg w-20">
              Log In
            </button>
          </form>
        </section>

        <section className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Register</h1>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="">
                Email Address
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="">
                Password
              </label>
              <input type="text" name="" id="" className="rounded-lg" />
            </div>
            <p className="w-80 text-[10px]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <span className="font-semibold">Privacy Policy</span>.
            </p>
            <button className="text-sm py-2 border border-black rounded-lg w-20">
              Register
            </button>
          </form>
        </section>
      </main>
      <Info />
    </>
  );
};
export default Account;
