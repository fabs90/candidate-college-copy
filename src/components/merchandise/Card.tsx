import Image from 'next/image'
import React from 'react'
import HeartFilledIcon from '../icons/HeartFilledIcon'

const Card: React.FC<any> = ({ product, isLoading, onClick }) => {
  const formatNamed = (name: any) => {
    return name.slice(0, 10) + '..';
  }

  return (
    <div className='flex flex-col gap-3 cursor-pointer' onClick={onClick}>
        {
            isLoading ? 
            <>
                <div className={'w-[136px] md:w-[359.333px] h-[138px] md:h-[352px] rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse'}></div>

                <div className="flex flex-col gap-1">
                    <div className="flex flex-row w-full items-center justify-between">
                        <div className='w-[4rem] py-2 md:py-4 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse'></div>
                        <span className='animate-pulse w-[2rem] md:w-[4rem] py-2 md:py-4 rounded-xl bg-secondary'>
                        </span>
                    </div>
                    <div className="w-full py-2 md:py-4 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                    <div className="w-[4rem] md:w-[5.5rem] py-3 md:py-5 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                </div>
            </> :
            <>
                <div className="relative w-[136px] md:w-[359.333px] h-[138px] md:h-[352px] object-cover rounded-xl">
                    {
                        product.isSoldOut? 
                        <span className='animate-pulse px-2 md:px-6 py-2 rounded-xl bg-gray text-white text-xs md:text-base absolute top-3 right-3'>
                        Sold Out
                        </span> : product.isTopSold ? <span className='px-2 md:px-6 py-2 rounded-xl bg-secondary text-primary text-xs md:text-base absolute top-3 right-3'>
                            Popular
                        </span> : null
                    }

                    <Image 
                        width={0}
                        height={0}
                        src={product.image.url}
                        alt={product.image.alt}
                        title={product.image.alt}
                        className={'w-[136px] md:w-[359.333px] h-[138px] md:h-[352px] object-cover rounded-xl'}
                    />
                </div>
                

                <div className="flex flex-col gap-1">
                    <div className="flex flex-row w-full items-center justify-between">
                        <h3 className='text-base text-primary md:hidden'>{formatNamed(product.name)}</h3>
                        <h3 className='text-base text-primary hidden md:block'>{product.name}</h3>
                        {/* <HeartFilledIcon size={'20'} color={'#FFDE59'} /> */}
                    </div>
                    <h3 className="text-base text-gray">{product.variant}</h3>
                    <h2 className="text-lg text-primary font-semibold">IDR {product.price}</h2>
                </div>
            </>
        }
    </div>
  )
}

export default Card
