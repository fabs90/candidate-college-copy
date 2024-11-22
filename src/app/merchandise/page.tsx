'use client'
import { CTA, Footer, Navbar } from '@/components'
import SearchIcon from '@/components/icons/SearchIcon'
import Card from '@/components/merchandise/Card'
import PopUp from '@/components/merchandise/PopUp'
import { merchandisesData } from '@/data/merchandiseData'
import Image from 'next/image'
import React, { useState } from 'react'

const Merchandise = () => {
  const [findProduct, setFindProduct] = useState<string>("")
  const [merchandises, setMerchandises] = useState<any[]>(merchandisesData)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isLoadingContent = [1, 2, 3, 4, 5, 6]

  const [showPopUp, setShowPopUp] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const selectProduct = (product: any) => {
    setSelectedProduct(product)
    setShowPopUp(!showPopUp)
  }

  const togglePopUp = () => {
    setShowPopUp(!showPopUp)
  }

  const handleFindProduct = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setMerchandises(isLoadingContent)
  
    const filteredData = merchandisesData.filter((item) =>
      item.name.toLowerCase().includes(findProduct.toLowerCase())
    );
  
    // Adding a 2-second delay before setting the filtered data
    setTimeout(() => {
      setMerchandises(filteredData);
      setIsLoading(false); // After setting the data, set isLoading to false
    }, 2000);
  };

  return (
    <main className={`bg-primary w-full relative h-full overflow-x-hidden`}>
      {/* Navbar */}
      <Navbar active='' isDetail={false} />

      {/* Hero */}
      <section className="flex flex-col md:flex-row pt-28 gap-4 px-5 md:mx-auto py-16 bg-primary md:justify-center md:items-center relative h-fit md:h-[80vh] w-full">
        <Image 
          src={'/decoration/merchandise.png'}
          width={0}
          height={0}
          className='w-[180px] md:w-[422px] md:h-[389px] absolute bottom-0 md:hidden block right-0'
          alt='Merchandise Decoration'
          title='Merchandise Decoration'
        />

        <Image 
          src={'/decoration/merchandise.png'}
          width={0}
          height={0}
          className='w-[180px] md:w-[372px] md:h-[339px] absolute bottom-[50] -right-14 hidden md:block'
          alt='Merchandise Decoration'
          title='Merchandise Decoration'
        />

        <Image 
          src={'/decoration/merchandise.png'}
          width={0}
          height={0}
          className='w-[180px] md:w-[372px] md:h-[339px] absolute bottom-[50] -left-14 hidden md:block'
          alt='Merchandise Decoration'
          title='Merchandise Decoration'
        />

        <div className="flex flex-col gap-4 mt-3 mb-5 md:text-center md:z-30">
          <h1 className="font-semibold text-white text-3xl md:text-[70px]  md:leading-[100%] leading-[150%] md:text-center">
          Merchandise <br />Candidate College
          </h1>

          <p className="text-gray text-sm lg:text-base w-[50%] md:w-full">
            Go get Candidate College’s Merchandise and Collect It Now
          </p>
        </div>

        <form onSubmit={handleFindProduct} autoComplete='off' className="absolute -bottom-5 mx-auto w-full md:w-[50%] px-12 -ml-5">
          <div className="flex flex-row gap-2">
            <input type="texxt" className="shadow-md bg-white text-primary placeholder:text-gray w-full py-3 px-6 rounded-full text-sm md:text-base" placeholder='Find product by name' value={findProduct} onChange={(e) => setFindProduct(e.target.value)} />

            <button className='flex items-center justify-center bg-secondary rounded-full p-3 shadow-md'>
              <SearchIcon size={'24'} color={'#1B4E6B'} />
            </button>
          </div>
        </form>
      </section>

      {/* Products */}
      <section className="w-full h-full bg-white">
        <section className={`w-full md:max-w-1xl pt-14 pb-16 px-5 flex flex-row flex-wrap mx-auto ${merchandises.length > 1 || merchandises.length > 3 ? 'items-center justify-center mx-auto' : 'justify-center'} gap-[35px]`}>
          {
            isLoading? isLoadingContent.map((item, index) => (
              <Card product={item} key={index} isLoading={isLoading} onClick={(e: any) => e.preventDefault()} />
            )) : 
            merchandises.map((merchandise, index) => (
              <Card product={merchandise} key={index} isLoading={false} onClick={(e: any) => selectProduct(merchandise)}  />
            ))
          }

          {
            merchandises.length == 0 && !isLoading ? 
            <div className='flex flex-col gap-2 items-center justify-center'>
              <Image 
                src={'/decoration/merchandise.png'}
                width={0}
                height={0}
                className='w-[180px] md:w-[350px]'
                alt='Merchandise Decoration'
                title='Merchandise Decoration'
              />
              <p className='text-primary text-sm md:text-lg'>Product is not available</p>
            </div> : null
          }
        </section>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />

      {/* Show the pop-up component based on the state */}
      {showPopUp && <PopUp onClose={togglePopUp} product={selectedProduct} />}
    </main>
  )
}

export default Merchandise