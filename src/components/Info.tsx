const Info = () => {
    return (
      <>
        <section className="py-14 flex lg:pl-0 pl-5 justify-evenly bg-[#dbc8c8] ">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl lg:text-2xl">Free Delivery</h2>
            <p className="text-[#9F9F9F] text-sm font-medium">For all oders over $50.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl lg:text-2xl">90 Days Return</h2>
            <p className="text-[#9F9F9F] text-sm font-medium">If goods have problems.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl lg:text-2xl">Secure Payment</h2>
            <p className="text-[#9F9F9F] text-sm font-medium">100% secure payment.</p>
          </div>
        </section>
      </>
    );
}
export default Info