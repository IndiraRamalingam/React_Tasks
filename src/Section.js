import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

function CCardBody(props)
{
  const [childRender, setchildRender] = useState(true);

  const Toggle = () => {
    if (childRender === true) {
      props.addItem(childRender);
    } else {
      props.removeItem(childRender);
    }
    setchildRender(!childRender);
  };
 // console.log(props)
  return(
    <>
       <div className='col-lg-4 mb-5'>
          <Card className="h-100" border="warning" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.img} width="450px" height="300px"/>
          {/* <!-- Sale badge--> */}
          {props.title === "Special Item" || props.title === "Sale Item" ? (
           <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : (
            <></>
          )}
          <Card.Body>
            <Card.Title className='text-center'>{props.title}</Card.Title>
            <Card.Text className='text-center'>   
              {/* <!-- Product reviews--> */}
              {props.title === "Popular Item" ||
              props.title === "Special Item" ? (
                <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                </div>
              ) : (
                <>
                <br/>
                </>
              )}          
               {/* <!-- Product price--> */}
               {props.title === "Special Item" || props.title === "Sale Item" || props.title ==="Fancy Product" ? (
                <>
                  
                 {props.title === "Special Item" || props.title === "Sale Item" ? (
                  <>
                  {" "}
                  <span className="text-muted text-decoration-line-through">
                    {props.price1} 
                  </span>
                  {" "}
                  <span>{props.price2}</span>{" "}
                </>
                ):(
                <>
                  <span>{props.price1} - {props.price2}</span>
                </>
                )}
                </>
              ) : (
                <>{props.price2}</>
              )}             
            </Card.Text>
            {props.title ==="Fancy Product" ? ( <>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
            <button className="btn btn-outline-dark mt-auto">View Options</button>
            </div>
            </div>
            </>
            ) : 
            (<>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {childRender ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={Toggle}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={Toggle}
                >
                  Remove from the cart
                </button>
              )}
            </div>
          </div>
            </>)}
          </Card.Body>
          </Card>
          
        </div>
    </>
  )
}

function Section(props1) {
const products=[
  {
    id:1,
    title:"Fancy Product",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1Gd1slK1nPZql4_USwKAeVTHhFLETa1BWg&usqp=CAU",
    price1:'$40.00',
    price2:'$80.00'
  },
  {
    id:2,
    title:"Special Item",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqykebK-Wam__X3aBVh0hcQwWNKfUOR0v9Gv4s07Roo5BT2Zk-RIOKoCthufROKIQqTbM&usqp=CAU",
    price1:'$20.00',
    price2:'$18.00'
  },
  {
    id:3,
    title:"Sale Item",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eX8v4LZdwPMtFhYaTS3S_72MhErXp_uZPWkEwOtfD1dtVNcd1xB7FQZcBmyHexjFg5s&usqp=CAU",
    price1:'$50.00',
    price2:'$25.00'
  },
  {
    id:4,
    title:"Popular Item",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yWeosOOtrKdqsg4YTL8PmZWydNQ8DoOKpA&usqp=CAU",
    price1:'',
    price2:'$40.00'
  },
  {
    id:5,
    title:"Sale Item",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsf4g-A2Kiev3lWQNjEn4NzhtvsKk63TG69w&usqp=CAU",
    price1:'$50.00',
    price2:'$25.00'
  },
  {
    id:6,
    title:"Fancy Product",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ukfvsE06GFdw2PP4xo2CELJvEItcdDyzjRWYNi2k5ZnP88j1gAANzUym9O3nzys-Pxc&usqp=CAU",
    price1:'$120.00',
    price2:'$280.00'
  },
  {
    id:7,
    title:"Special Item",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKdRMUVtmueBov9ej6MqdcNGbaHdVPU7usQ&usqp=CAU",
    price1:'$20.00',
    price2:'$18.00'
  },
  {
    id:8,
    title:"Popular Item",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7cMe8t6jxddAonvjvF1pkIvk0kjdx4vTlQ&usqp=CAU",
    price1:'',
    price2:'$40.00'
  }
]



  return (
    <div className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {products.map((Item,index)=>
        (
          <CCardBody
          key={index}
          title={Item.title}
          img={Item.img}
          price1={Item.price1}
          price2={Item.price2}
          addItem={props1.addItem}
          removeItem={props1.removeItem}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Section