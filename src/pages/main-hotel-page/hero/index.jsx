import React, {useEffect, useState} from "react";
import "../index.css";
import AboutCard from "../components/cards/aboutCard";
import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios"
import { apiUrl } from "../../../Api";


function HotelHero() {
  const [heroDes, setHeroDes] = useState(null)

  useEffect(() => {
    getHero()
  }, [])

  const getHero = () => {
    axios.get(`${apiUrl}hotel-manage`)
    .then((res) => {
      setHeroDes(res.data['manage-hotels-description']);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="w-full h-full">
      <div className="hotel_hero_bg w-full h-screen bg_setting">
      <div className="flex flex-col md:flex-row md:gap-6 w-full h-screen justify-center items-center">
        <span className="text-8xl md:text-9xl font-bold font-serif text-shadow rotate-3 text-white animate-bounce">H</span>
        <span className="text-8xl md:text-9xl font-bold font-serif text-shadow -rotate-3 text-white  delay-700 animate-pulse">O</span>
        <span className="text-8xl md:text-9xl font-bold font-serif text-shadow rotate-3 text-white animate-bounce">T</span>
        <span className="text-8xl md:text-9xl font-bold font-serif text-shadow -rotate-3 text-white  delay-700 animate-pulse">E</span>
        <span className="text-8xl md:text-9xl font-bold font-serif text-shadow rotate-3 text-white animate-bounce">L</span>

      </div>
      
      </div>
      <div className="w-full flex justify-center mt-20 lg:mt-0 lg:absolute card-setting">
        <AboutCard
          name={heroDes ? heroDes['hotel-adress'] : "Adress"}
          bodyName={"Hotel Descritpiton"}
          description={heroDes ? heroDes.description : "Description"}
          stars={heroDes ? heroDes['hotel-stars'] : 1}
        
        />
      </div>
      <div className="w-[80%] flex gap-3 hotel_hero_back mt-10 lg:mt-72 justify-end items-center ">
        <FaLeftLong size='3rem' />
        <Link to="/" className="text-2xl font-bold text-yellow-600 text-shadow">Back to Hotels</Link>
      </div>
    </div>
  );
}

export default HotelHero;
