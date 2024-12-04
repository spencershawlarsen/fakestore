import '../App.css';
import hero1 from "../images/hero1.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import { Carousel } from "flowbite-react";

export default function Hero() {

  return (
    <>
    <div className="h-56 sm:h-80 xl:h-96 2xl:h-96 ">
      <Carousel>
        <img src={hero1} alt="Hero1" />
        <img src={hero2} alt="Hero2" />
        <img src={hero3} alt="Hero3" />
      </Carousel>
    </div>
    </>
  );
}
