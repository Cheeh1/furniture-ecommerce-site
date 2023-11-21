import Header from "../components/Header";
import Info from "../components/Info";
import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";
import clock from "../assets/icons/clock.svg";

const Contact = () => {
  return (
    <>
      <Header children="Contact" />
      <main className="flex flex-col gap-20 pt-10 pb-20 text-gray-700">
        <section className="flex flex-col gap-2 items-center">
          <h1 className="font-semibold text-2xl">Get In Touch With Us</h1>
          <p className="text-[#9F9F9F] text-center px-5 md:w-1/2 lg:w-1/2">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </section>

        <section className="flex justify-evenly flex-col-reverse gap-20 lg:gap-0 md:flex-row lg:flex-row px-5">
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 items-start">
              <img className="w-5" src={location} alt="location" />
              <div className="flex flex-col">
                <h1 className="font-medium text-sm">Address</h1>
                <p className="text-[10px] w-40">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img className="w-5" src={phone} alt="location" />
              <div className="flex flex-col">
                <h1 className="font-medium text-sm">Phone</h1>
                <p className="text-[10px]">Mobile: (+84) 546-6789</p>
                <p className="text-[10px]">Hotline: (+84) 456-6789</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img className="w-5" src={clock} alt="location" />
              <div className="flex flex-col">
                <h1 className="font-medium text-sm">Working Time</h1>
                <p className="text-[10px]">Monday-Friday: 9:00-22:00</p>
                <p className="text-[10px]">Saturday-Sunday: 9:00-21:00</p>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="John Doe"
                className="rounded-lg lg:w-96 placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Email address
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="johndoe@gmail.com"
                className="rounded-lg placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="This is an optional"
                className="rounded-lg placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-medium">
                Message
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Hi i'd like to ask about"
                className="rounded-lg h-20 placeholder:text-[10px]"
              />
            </div>
            <button className="text-sm py-2 border border-black rounded-lg w-40">
              Submit
            </button>
          </form>
        </section>
      </main>
      <Info />
    </>
  );
};
export default Contact;
