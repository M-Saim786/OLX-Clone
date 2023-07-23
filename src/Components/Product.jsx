import React, { useEffect, useState } from 'react'
import './product.css'
import { onValue, ref } from 'firebase/database'
import { db } from '../Config/Firebase'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiHeart } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
function Product() {
  const [Products, setProducts] = useState([])
  let featureValArr = []
  let SortedArr = []
  useEffect(() => {
    const dbref = ref(db, 'Product')
    onValue(dbref, (snapShot) => {
      let data = snapShot.val()
      console.log(data)
      if (data) {
        setProducts(Object.values(data))
        // console.log(Products)
        for (const i of Products) {
          console.log(i)
          featureValArr.push(i.Feature_Value)

        }
        featureValArr.sort((a, b) => b - a)
        console.log(featureValArr)

        for (const k of featureValArr) {
          for (const J of Products) {
            if (J.Feature_Value === k) {
              console.log(`Feature Sort ${J.Feature_Value}`)
              SortedArr.push(J)
              console.log(SortedArr)
            }
          }
        }

      }
      if (Object.values(data).length === SortedArr.length) {
        setProducts(SortedArr)
      }
    })
  }, [])

  return (
    <><div className="productDiv">

      {/* ----------------------------- Mobile Phone Category ------------------- */}
      <div className="Products">
        <div className="upRow">
          <h2>Mobile Phones</h2>
          <div className="viewMore">
            <a href="">
              View More <IoIosArrowForward className='viewMoreIcon' />
            </a>
          </div>
        </div>
        <div className="mobilePhones CardsRow">
          {
            Products.map((prod, index) => {
              return (
                prod.Category === 'Mobile Phones' ?
                  <>
                    <Card >
                      <Card.Img variant="top" src={prod.imgUrl} />
                      <Card.Body>
                        <Card.Title>
                          <h6 className='title'>
                            Rs.  {`${prod.Product_Price.slice(0, 3)},${prod.Product_Price.slice(3, prod.Product_Price.length)}`}
                          </h6>
                          <BiHeart className='favouriteIcon' />
                        </Card.Title>
                        <Card.Text>
                          <p className='Product_Desc'>
                            {`
                          ${prod.Product_Desc}
                          `}
                          </p>
                          {/* <h2>
                           feature Value {prod.Feature_Value}
                          </h2> */}
                        </Card.Text>
                        <p className='Product_Address'>
                          {prod.Product_Address.split(' ').join(', ')}
                        </p>
                        <p>
                          {prod.Date}
                        </p>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </>
                  :
                  ''
              )
            })
          }

        </div>
      </div>
      {/* ------------------------------ Bike Category ------------------------- */}
      <div className="Products">
        <div className="upRow">
          <h2>Bikes & Motorcycles</h2>
          <div className="viewMore">
            <a href="">
              View More <IoIosArrowForward className='viewMoreIcon' />
            </a>
          </div>
        </div>
        <div className="bikes CardsRow">

          {
            Products.map((prod, index) => {
              return (
                prod.Category === 'Bikes' ?
                  <>
                    <Card >
                      <Card.Img variant="top" src={prod.imgUrl} />
                      <Card.Body>
                        <Card.Title>
                          <h6 className='title'>
                            Rs.  {`${prod.Product_Price.slice(0, 3)},${prod.Product_Price.slice(3, prod.Product_Price.length)}`}
                          </h6>
                          <BiHeart className='favouriteIcon' />
                        </Card.Title>
                        <Card.Text>
                          <p className='Product_Desc'>
                            {`
                          ${prod.Product_Desc}
                          `}
                          </p>
                          {/* <h2>
                           feature Value {prod.Feature_Value}
                          </h2> */}
                        </Card.Text>
                        <p className='Product_Address'>
                          {prod.Product_Address.split(' ').join(', ')}
                        </p>
                        <p>
                          {prod.Date}
                        </p>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </> : ''
              )
            })
          }
        </div>
      </div>
      {/* ------------------------- Car Category ----------------------------- */}
      <div className="Products">
        <div className="upRow">
          <h2>Cars</h2>
          <div className="viewMore">
            <a href="">
              View More <IoIosArrowForward className='viewMoreIcon' />
            </a>
          </div>
        </div>
        <div className="vehicles CardsRow">

          {
            Products.map((prod, index) => {
              return (
                prod.Category === 'Vehicles' ?
                  <>
                    <Card >
                      <Card.Img variant="top" src={prod.imgUrl} />
                      <Card.Body>
                        <Card.Title>
                          <h6 className='title'>
                            Rs.  {`${prod.Product_Price.slice(0, 3)},${prod.Product_Price.slice(3, prod.Product_Price.length)}`}
                          </h6>
                          <BiHeart className='favouriteIcon' />
                        </Card.Title>
                        <Card.Text>
                          <p className='Product_Desc'>
                            {`
                          ${prod.Product_Desc}
                          `}
                          </p>
                          {/* <h2>
                           feature Value {prod.Feature_Value}
                          </h2> */}
                        </Card.Text>
                        <p className='Product_Address'>
                          {prod.Product_Address.split(' ').join(', ')}
                        </p>
                        <p>
                          {prod.Date}
                        </p>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </> : ''
              )
            })
          }
        </div>

      </div>
    </div>
      {/* <img src={footer} alt="" /> */}

    </>
  )
}

export default Product
