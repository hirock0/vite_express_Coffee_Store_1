import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Add_Coffee = () => {
  const [coffeeImage, setCoffeeImage] = useState("");

  const onAddCoffee = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);

      const coffeeObj = {
        coffee_name: formData.get("name"),
        coffee_chef: formData.get("chef"),
        coffee_supplier: formData.get("supplier"),
        coffee_taste: formData.get("taste"),
        coffee_category: formData.get("category"),
        coffee_details: formData.get("details"),
        coffee_image: coffeeImage,
      };
      const response = await axios.post(
        "https://coffee-backend-z9tc.onrender.com/api/upload",
        coffeeObj
      );
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  };

  const base64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (result) => {
      setCoffeeImage(result.target.result);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  return (
    <main
      className={` bg-[url("/images/more/11.png")] bg-cover bg-center bg-no-repeat pt-10 `}
    >
      <div className="">
        <Link to={"/"} className=" text-3xl font-semibold">
          Back to home
        </Link>
      </div>
      <div className=" bg-zinc-100 p-10 mt-5 rounded-lg  flex items-center justify-center ">
        <div className=" text-center flex flex-col items-center">
          <h1 className=" text-3xl font-semibold">Add New Coffee</h1>
          <p className=" mt-4 w-1/2">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={onAddCoffee}
            className=" mt-5 grid grid-cols-2 max-md:grid-cols-1 gap-3 w-full text-start"
          >
            <div className=" w-full">
              <h1>Name</h1>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className=" pl-2 h-12 outline-none rounded-lg shadow-lg w-full"
              />
            </div>
            <div className=" w-full">
              <h1>Chef</h1>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className=" pl-2 h-12 outline-none rounded-lg shadow-lg w-full"
              />
            </div>
            <div className=" w-full">
              <h1>Supplier</h1>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className=" pl-2 h-12 outline-none rounded-lg shadow-lg w-full"
              />
            </div>
            <div className=" w-full">
              <h1>Taste</h1>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className=" pl-2 h-12 outline-none rounded-lg shadow-lg w-full"
              />
            </div>
            <div className=" w-full">
              <h1>Category</h1>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className=" pl-2 h-12 outline-none rounded-lg shadow-lg w-full"
              />
            </div>
            <div className=" w-full">
              <h1>Details</h1>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className=" pl-2 h-12 outline-none rounded-lg shadow-lg w-full"
              />
            </div>
            <div className=" w-full md:col-span-2">
              <h1>Photo</h1>
              <input
                type="file"
                onChange={base64}
                accept="image/*"
                placeholder="Enter photo URL"
                className=" pl-2 h-12 outline-none rounded-lg shadow-lg w-full"
              />
            </div>
            <button className=" bg-yellow-800 h-12 md:col-span-2 rounded-lg text-white">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Add_Coffee;
