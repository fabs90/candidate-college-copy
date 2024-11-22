import Link from 'next/link'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import StarFilledIcon from '../icons/StarFilledIcon';
import BagIcon from '../icons/BagIcon';

const PopUp: React.FC<any> = ({ onClose, product }) => {
  return (
    <div className="w-full h-full absolute md:flex md:items-start md:justify-center top-0 bg-[rgba(0,0,0,0.5)] z-50">
        <div className="flex-col gap-2 bg-white rounded-tl-2xl rounded-tr-2xl md:rounded-2xl opacity-100 mt-[24vh] w-full h-[443px] md:h-fit md:pb-8 flex px-6 fixed bottom-0 md:top-0 md:mx-5 md:fixed md:w-[40%]">
            <span className='text-2xl absolute top-5 right-6 text-primary cursor-pointer' onClick={onClose}>
                <CloseIcon fontSize='inherit' color='inherit' />
            </span>

            <div className="flex flex-col gap-4 h-full mt-12">
                <div className="flex flex-row gap-3 items-center">
                    <Image 
                        width={0}
                        height={0}
                        src={product.image.url}
                        alt={product.image.alt}
                        title={product.image.alt}
                        className={'w-[136px] md:w-[220.662px] h-[141.067px] md:h-[157px] object-cover rounded-xl'}
                    />

                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row w-full items-center justify-between">
                            <h3 className='text-base text-primary'>{product.name}</h3>
                        </div>
                        <h3 className="text-base text-gray">{product.variant}</h3>
                        <h2 className="text-2xl text-primary font-bold">IDR {product.price}</h2>
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="flex rounded-xl bg-[#F4F4F4] items-center py-[11px] px-[13.2px] gap-2 h-fit">
                        <p className='text-[#171520] text-sm font-medium'>{product.rate}</p>
                        <StarFilledIcon />
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-primary text-sm">
                            Description : 
                        </p>
                        <div className='text-gray text-sm md:w-[80%]'>
                            <p>Material Cover: Hard Cover Kualitas Premium 💯</p>
                            <p>
                            Variasi : Universitas Gadjah Mada, Institut Teknologi Bandung, Universitas Indonesia, Harvard University, dan Oxford University
                            </p>
                        </div>
                    </div>
                </div>

                <Link href='/about' title={product.isSoldOut? 'Sold Out' : 'Order Now'} about={product.isSoldOut? 'Sold Out' : 'Order Now'} className={`${product.isSoldOut? 'bg-gray' : 'bg-primary'} text-white font-medium text-sm rounded-full px-5 py-3 text-center cursor-pointer w-full mt-2 md:mt-0 self-end flex items-center justify-center gap-3`}><BagIcon /> <p>{product.isSoldOut ? 'Sold Out' : 'Order Now'}</p></Link>
            </div>
        </div>
    </div>
  )
}

export default PopUp
