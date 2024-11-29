import { Link } from "react-router-dom";
import Hero_Section from "./components/Hero_Section/Hero_Section";
import { FaRegEye } from "react-icons/fa";
import { TbPencilExclamation } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
const CoffeeArray = [
  {
    id: 0,
    coffee: "/images/1.png",
    name: "Americano Coffee",
    Chef: "Mr.Matin Paul",
    price: "890",
  },
  {
    id: 1,
    coffee: "/images/2.png",
    name: "Americano Coffee",
    Chef: "Mr.Matin Paul",
    price: "890",
  },
  {
    id: 2,
    coffee: "/images/3.png",
    name: "Americano Coffee",
    Chef: "Mr.Matin Paul",
    price: "890",
  },
  {
    id: 3,
    coffee: "/images/4.png",
    name: "Americano Coffee",
    Chef: "Mr.Matin Paul",
    price: "890",
  },
  {
    id: 4,
    coffee: "/images/5.png",
    name: "Americano Coffee",
    Chef: "Mr.Matin Paul",
    price: "890",
  },
  {
    id: 5,
    coffee: "/images/6.png",
    name: "Americano Coffee",
    Chef: "Mr.Matin Paul",
    price: "890",
  },
];
const coffeeArray = [
  {
    id: 0,
    image: "/images/cups/Rectangle 9.png",
  },
  {
    id: 1,
    image: "/images/cups/Rectangle 10.png",
  },
  {
    id: 2,
    image: "/images/cups/Rectangle 11.png",
  },
  {
    id: 3,
    image: "/images/cups/Rectangle 12.png",
  },
  {
    id: 4,
    image: "/images/cups/Rectangle 13.png",
  },
  {
    id: 5,
    image: "/images/cups/Rectangle 14.png",
  },
  {
    id: 6,
    image: "/images/cups/Rectangle 15.png",
  },
  {
    id: 7,
    image: "/images/cups/Rectangle 16.png",
  },
];
const App = () => {
  return (
    <main>
      <Hero_Section />
      <section className="bg-zinc-200 py-5 ">
        <div className=" container  mx-auto px-5 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 text-center gap-5 ">
          <div className=" flex flex-col items-center justify-center">
            <img src="/images/icons/1.png" alt="icon1" />
            <h1 className=" text-3xl font-semibold">Awesome Aroma</h1>
            <p className=" lg:w-5/6 ">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img src="/images/icons/2.png" alt="icon2" />
            <h1 className=" text-3xl font-semibold">High Quality</h1>
            <p className="   lg:w-5/6">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/icons/3.png" alt="icon3" />
            <h1 className=" text-3xl font-semibold">Pure Grades</h1>
            <p className="   lg:w-5/6">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img src="/images/icons/4.png" alt="icon4" />
            <h1 className=" text-3xl font-semibold">Proper Roasting</h1>
            <p className=" lg:w-5/6">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </section>
      <section
        className={`bg-[url("/images/more/1.png")] bg-cover bg-center bg-no-repeat text-center mt-20 `}
      >
        <div className=" container mx-auto px-5 h-full ">
          <h1>--- Sip $ Savor ---</h1>
          <h1 className=" text-3xl font-semibold">Our Popular Products</h1>
          <div className=" flex items-center justify-center">
            <Link
              to={"/add_coffee"}
              className=" border px-5 py-1 rounded-lg bg-yellow-600 text-white "
            >
              Add Coffee
            </Link>
          </div>
          <div className=" mt-5 grid grid-cols-2 max-md:grid-cols-1 gap-5">
            {CoffeeArray.map((item, index) => (
              <div
                className="bg-zinc-100/70 flex rounded-lg items-center p-5 max-lg:flex-col"
                key={index}
              >
                <img src={item.coffee} alt={item.name} />
                <div className=" flex justify-between gap-3 w-full max-lg:flex-col max-md:items-center ">
                  <div className="">
                    <h1 className=" flex items-center gap-3">
                      <span className=" font-semibold"> Name</span>
                      <span className=" opacity-70">{item.name}</span>
                    </h1>
                    <h1 className=" flex items-center gap-3">
                      <span className=" font-semibold">Chef</span>
                      <span className=" opacity-70">{item.Chef}</span>
                    </h1>
                    <h1 className=" flex items-center gap-3">
                      <span className=" font-semibold"> Price</span>
                      <span className=" opacity-70">{item.price} TK</span>
                    </h1>
                  </div>
                  <div className=" flex lg:flex-col justify-between gap-4 max-lg:justify-center ">
                    <Link
                      to={`/details_coffee/${item.id}`}
                      className=" max-lg:w-fit  rounded-lg bg-yellow-700 text-white p-2"
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      to={`/update_coffee/${item.id}`}
                      className=" max-lg:w-fit rounded-lg bg-slate-800 text-white p-2"
                    >
                      <TbPencilExclamation />
                    </Link>
                    <button className=" max-lg:w-fit rounded-lg bg-red-400 text-white p-2">
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" mt-20">
        <div className=" text-center container mx-auto px-5">
          <h1>Follow Now</h1>
          <h1 className=" text-3xl font-semibold">Follow on Instagram</h1>
          <div className=" grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5  mt-5 justify-items-center">
            {coffeeArray.map((item, index) => (
              <div key={index} className="">
                <img src={item.image} alt="coffee" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
