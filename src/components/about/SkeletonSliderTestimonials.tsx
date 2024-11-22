const SkeletonSliderTestimonial = () => {
  return (
    <div className="flex flex-col justify-between lg:w-[22rem] xxsm:w-[19rem] lg:h-[28rem] xxsm:h-[29rem] px-6 py-8 bg-white rounded-xl shadow-[0_0_2px_3px_rgba(237,243,246,1)] lg:gap-6 xxsm:gap-2">
      {/* Content Line 1 */}
      <div className="flex flex-col gap-2">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full mb-3 bg-gradient-to-r from-slate-200 to-slate-200 animate-pulse" />   
        {/* Testimonial */}
        <div className="flex flex-col gap-2">
          {Array.from({length: 5}).map((_, index) => (
            <div key={index} className="w-full h-5 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse"/>
          ))}
          <div className="w-28 h-5 rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 animate-pulse"/>
        </div>
      </div>

      {/* Content Line 2 */}
      <div className="flex flex-row items-center gap-4">
        {/* Image */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-200 to-slate-200 animate-pulse"/>
        {/* Name and Position */}
        <div className="flex flex-col w-[80%] gap-2">
          {/* Name  */}
          <div className="w-24 h-5 rounded-xl bg-gradient-to-r from-slate-200 to-slate-200 animate-pulse" />
          {/* Position */}
          <div className="w-full h-5 rounded-xl bg-gradient-to-r from-slate-200 to-slate-200 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonSliderTestimonial