import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import list from "../assets/list.json";
import Cards from "./Cards";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("https://bookstorebackend-e5t5.onrender.com/book");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, aperiam! Quidem nisi facere at unde eos libero
            possimus, cumque, accusantium a quos quod blanditiis minus deserunt
            vero dolore, architecto totam provident mollitia enim corrupti cum
            explicabo quam suscipit. Excepturi deserunt nobis, perferendis rerum
            odio inventore commodi aut non culpa ipsum.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item, id) => (
            <Cards key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
