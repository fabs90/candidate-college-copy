import React from 'react'

const ListItem: React.FC<any> = ({ data, isLoading, onClick, active }) => {
  return (
    <>
        {
            isLoading ? 
            <div className={`rounded-full bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse px-2 md:px-5 py-3 text-transparent text-center cursor-pointer mt-6 hover:bg-primary hover:text-white md:mt-0 w-full duration-700 transition-all h-fit`}>LOADING ...</div> 
            :
            <div onClick={onClick} className={`${data.name == active ? 'bg-primary text-white' : 'bg-secondary text-primary'} font-medium text-sm md:text-base rounded-full px-2 md:px-5 py-3 text-center cursor-pointer mt-6 hover:bg-primary hover:text-white md:mt-0 w-full duration-700 transition-all h-fit`}>{data.name}</div>  
        }
    </>
  )
}

export default ListItem
