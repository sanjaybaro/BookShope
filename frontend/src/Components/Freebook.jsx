import React, { useEffect } from "react";
// import list from "../assets/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState } from "react";

function Freebook() {
  // console.log(filterFreeData);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("https://bookstorebackend-e5t5.onrender.com/book");

        const filterData = response.data.filter(
          (item) => item.category === "Free"
        );
        console.log(filterData);
        setBook(filterData);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  //carosuel setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            fuga. Qui exercitationem tenetur inventore possimus autem
            laboriosam, repellendus similique modi? Sint sequi rem laboriosam
            vitae nemo! Libero eos unde recusandae dicta reprehenderit, eveniet
            repellendus corporis ab sit rem vitae officiis.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item, id) => (
              <Cards item={item} key={id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
