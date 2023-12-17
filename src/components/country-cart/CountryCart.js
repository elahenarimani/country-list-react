import './countryCart.css'
function CountryCart({flag,name,capital,lang}){
    return(
        <div className="contry-wrapper w-full h-full lg:h-auto max-w-[500px] md:w-[300px]  h-[150px] grid justify-start content-start grid-cols-2 gap-y-[20px] gap-x-[8px]">
             <div className="w-[70px] h-[50px] ">
                <img className="w-full h-full " src={flag} alt='flag'/>
             </div>
             <div className="max-w-[220px] ">
             <span className='text-blue-900 '>name:</span>
             <span className='text-blue-600 '>{name}</span>   
             </div>
             <div className=" capital w-[130px] h-full  ">
                <span className='text-blue-900  '>capital:</span>
                <span className='text-blue-600   '>{capital}</span>  
             </div>
             <div className="max-w-[70px] h-full">
             <span className='text-blue-900 '>lanuage:</span>
             <span className='text-blue-600 '>{lang}</span>  
             </div>
        </div>
    )
}
export default CountryCart;