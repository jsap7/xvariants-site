import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import slide1 from "../../Assets/Slides/slide1.png"
import slide2 from "../../Assets/Slides/slide2.png"
import slide3 from "../../Assets/Slides/slide3.png"
import slide4 from "../../Assets/Slides/slide4.png"
import slide5 from "../../Assets/Slides/slide5.png"
import slide6 from "../../Assets/Slides/slide6.png"
import slide7 from "../../Assets/Slides/slide7.png"
import slide8 from "../../Assets/Slides/slide8.png"
import slide9 from "../../Assets/Slides/slide9.png"
import slide10 from "../../Assets/Slides/slide10.png"
import slide11 from "../../Assets/Slides/slide11.png"
import slide12 from "../../Assets/Slides/slide12.png"
import slide13 from "../../Assets/Slides/slide13.png"
import slide14 from "../../Assets/Slides/slide14.png"

import "./flickity.css";

const flickityOptions = {
    initialIndex: 5,
    draggable: true,
    wrapAround: true,
    autoPlay: 1500,
    freeScoll: true,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: true

}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img className="carousel-cell" src={slide8}/>
      <img className="carousel-cell" src={slide1}/>
      <img className="carousel-cell" src={slide7}/>
      <img className="carousel-cell" src={slide4}/>
      <img className="carousel-cell" src={slide5}/>
      <img className="carousel-cell" src={slide6}/>
      <img className="carousel-cell" src={slide9}/>
      <img className="carousel-cell" src={slide2}/>
      <img className="carousel-cell" src={slide3}/>
      <img className="carousel-cell" src={slide10}/>
      <img className="carousel-cell" src={slide11}/>
      <img className="carousel-cell" src={slide14}/>
      <img className="carousel-cell" src={slide12}/>
      <img className="carousel-cell" src={slide13}/>
      
    </Flickity>
  );
}

export default Carousel;