import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../public/accessHeader.jpeg";
import img2 from "../../public/access.jpeg"
import { useState } from 'react';

const data = [
    {
     image: img1, 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:img2, 
      caption:"Caption",
      description:"Description Here"
     },
  ]
export default function ImageCarousel() {
    
      const [index, setIndex] = useState(0);
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={slide.image}>        
        <img
          className="d-block w-100"
          height={500}
          src={slide.image}
          alt="slider image"
        />
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
