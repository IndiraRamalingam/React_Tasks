import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcLONrRT2rpht9-HLEvjOhKk2V68dtYUviA&usqp=CAU"
            alt="First slide"
            height="350px"   
            />
            <Carousel.Caption>
            <h3>Stylish Bags</h3>
            <p>FLAT upto 75% offer. Grab it now</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAMhKHviGztUfnNrQBDBLy6zl8lWta5yH-w&usqp=CAU"
            alt="Second slide"
            height="350px"
            
            />
            <Carousel.Caption>
            <h3>Stylish Bags</h3>
            <p>FLAT upto 75% offer. Grab it now</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNAePifOCDtng61YGawLKDTJaV7zbCqLTZg&usqp=CAU"
            alt="Third slide"
            height="350px"
            />
            <Carousel.Caption>
            <h3>Stylish Bags</h3>
            <p>FLAT upto 75% offer. Grab it now</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    
  )
}

export default Header