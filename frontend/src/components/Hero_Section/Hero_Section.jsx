const Hero_Section = () => {
  return (
    <section className=" relative text-white  ">
      <img src="/images/more/3.png" alt="hero" className=" max-md:h-[400px] object-cover" />
      <div className=" absolute top-0 left-0 right-0 bottom-0 container mx-auto px-5 flex items-center ">
        <div className=" w-1/2 max-md:hidden"></div>
        <div className=" w-1/2 max-md:w-full space-y-3">
          <h1 className=" text-5xl max-lg:text-4xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className=" text-xl leading-6 opacity-75">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-yellow-600 text-black px-5 py-1">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero_Section;
