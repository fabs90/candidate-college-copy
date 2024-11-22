import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ComingSoon = () => {
  return (
    <section className="flex flex-col items-center h-full lg:pt-36 lg:pb-28 xsm:pt-40 xsm:pb-24 xxsm:pt-32 xxsm:pb-20 xxsm:px-6">
        <Image src={'/decoration/coming.png'} width={0} height={0}
          className='lg: w-[600px] xxsm: w-40 mx-auto' 
          alt='Coming Soon Decoration'
          title='Coming Soon Decoration'
        />

        <h1 className="font-semibold text-primary text-center lg:text-[40px] p-1 md:text-[30px] xl:w-[70%] md:w-[90%] md:text-center leading-[50%]">
          Coming Soon
        </h1>

        <p className="text-gray text-sm text-center leading-2 md:pt-4 pt-2 md:text-center lg:text-base md:w-[70%]">
           This still in development process candidaters! <br />
           Stay tuned
        </p>

        <Link
          href="/"
          title="Back to Home"
          about="Back to Home"
          className="bg-secondary text-primary font-medium self-center text-center text-base rounded-full px-20 py-2 text-center justify-center md:self-center self-start cursor-pointer lg:mt-5 md:mt-4 xxsm:mt-4 md:mt-[11px]"
        >
          Back to Home
        </Link>
    </section>
  )
}

export default ComingSoon
