import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} `);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {
        loading ? (
          <div className="flex items-center justify-center mt-[45px]">
            <PropagateLoader color="#36d7b7"/>
          </div>
        ) : (
          <div className="flex flex-wrap gap-10 justify-center  lg:justify-start mx-6 my-10">
            {FoodData.filter((food) => {
              if (category === "All") {
                return food.name.toLowerCase().includes(search.toLowerCase());
              } else {
                return (
                  category === food.category &&
                  food.name.toLowerCase().includes(search.toLowerCase())
                );
              }
            }).map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                handleToast={handleToast}
              />
            ))}
          </div>
        )
      }

    </>
  );
};

export default FoodItems;
