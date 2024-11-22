import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import './../styles/swiper-article.css'

const CardItem: React.FC<any> = ({ data, type, isLoading }) => {
  return (
    <>
        {
            isLoading ?
            <div className="flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer">
                <div className="rounded-lg w-[22rem] h-[22rem] bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>

                <div className="flex flex-col gap-2 pt-3 pb-5 relative px-5">
                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-3"></div>

                    <div className="flex flex-col gap-1 w-full">
                        <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                        <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                        <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                        <div className="w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                    </div>

                    <Link href='/articles' title='Read More' about='Read More' className='bg-secondary text-transparent font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5 bg-gradient-to-r from-yellow-200 to-yellow-300 animate-pulse'>Read More</Link>
                </div>
            </div>
            :
            <div className="flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer w-[22rem]">
                <Image 
                src={`https://resource.candidatecollegeind.com/storage/${data.cover}`}
                    alt={type == 'Article' ? data.title : data.name}
                    title={type == 'Article' ? data.title : data.name}
                    className="rounded-lg w-[22rem] h-[22rem] object-cover"
                    width={0}
                    height={0}
                />

                <div className="flex flex-col gap-2 pt-3 pb-5 relative px-5">
                    <h3 className="font-semibold text-base text-primary">
                        {
                            type == 'Article' ? 
                            data.title.length > 33 ? (data.title.substring(0, 33) + '...') : (data.title)
                            :
                            data.name.length > 33 ? (data.name.substring(0, 33) + '...') : (data.name)
                        }
                    </h3>
                    <p className="font-normal text-sm text-gray">
                        {data.snippets.substring(0, 150) + '...'}
                    </p>
                    <Link href={`/${type == 'Article' ? 'articles' : 'events'}/${data.slug}`} title='Read More' about='Read More' className='bg-secondary text-primary font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5'>Read More</Link>
                </div>
            </div>
        }
    </>
  )
}

export default CardItem
