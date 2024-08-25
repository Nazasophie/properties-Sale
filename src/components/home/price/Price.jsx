import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='' />These package aim to convey the idea that your packages are customizable and designed to meet a variety of needs.
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
