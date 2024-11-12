import React from 'react'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({dataImage}) => {
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill/>
      {dataImage?.slice(27,30).map(item => (
        <img key={item.id} src={item.download_url} alt={item.alt} className='slide'/>
      ))}
      <BsArrowRightCircleFill/>
    </div>
  )
}

export default Carousel
