import './countryCart.css'
function CountryCart({flag,name,capital,languages}){
    return(
        <div className="contry-wrapper w-full h-full max-w-[500px] md:w-[300px]  h-[150px] grid justify-between items-center grid-cols-2 gap-y-[20px] gap-x-[8px]">
             <div className="w-[70px] h-auto ">
                <img className="w-full h-full " src={flag} alt='flag'/>
             </div>
             <div className="max-w-[220px] ">
             <span className='text-blue-900 '>name:</span>
             <span className='text-blue-600 font-bold'>{name}</span>   
             </div>
             <div className="w-[70px] ">
                <span className='text-blue-900 '>capital:</span>
                <span className='text-blue-600 font-bold'>{capital}</span>  
             </div>
             <div className="max-w-[220px]">
             <span className='text-blue-900 '>lanuage:</span>
             <span className='text-blue-600 font-bold'>{languages}</span>  
             </div>
        </div>
    )
}
export default CountryCart;