const Footer = () => {
  return (
    <>
    <hr />
    <main className="pt-20 md:pt-20 pb-5 flex flex-col gap-20">
      <section className="flex lg:flex-row md:flex-row flex-col gap-10 justify-evenly items-center">
        <div className="flex lg:gap-56 gap-32 md:gap-20">
          <ul className="flex flex-col gap-2 font-medium">
            <li>Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <ul className="flex flex-col gap-2 font-medium">
            <li>Help</li>
            <li>Payment</li>
            <li>Resume</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-2xl lg:w-96 w-80 text-center font-bold">
            Want us to email you with our latest furniture deals?
          </h1>
          <div className="flex justify-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="john@doe.com"
              className="rounded-l-xl bg-gray-200 border-none placeholder:text-sm font-medium"
            />
            <button className="bg-[#dbc8c8] p-3 rounded-r-xl text-white font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <hr />
        <p className="font-medium pl-20">2023 Meubel. All rights reserved</p>
      </section>
    </main>
    </>
  );
};
export default Footer;
