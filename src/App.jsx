import { useState,useContext,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { QuoteContext } from './contexts/GlobalContext';
function App() {
  const {quote,author,Backgroundcolor,GenerateRandomQuote} = useContext(QuoteContext);
  useEffect(() => {
    GenerateRandomQuote();
  }, [])
  
  return (
    <>
      <div className='h-screen w-screen transition-colors ease-in-out duration-1000 flex justify-center items-center' style={{backgroundColor:Backgroundcolor,color:Backgroundcolor}}>
        <div className='w-[600px] bg-white rounded-md flex flex-col space-y-5 py-10 px-20'>
          <div className='flex flex-col'>
          <h1 className='text-3xl'>{quote}
          </h1>
          <p className='self-end text-lg'>- {author}</p>
          </div>
          <div className='flex justify-between'>
            <div className="left flex text-sm gap-5 ">
              <button style={{backgroundColor:Backgroundcolor,color:'white'}} className='transition-colors ease-in-out duration-1000 p-3 rounded-md'>Twitter</button>
              <button style={{backgroundColor:Backgroundcolor,color:'white'}} className='transition-colors ease-in-out duration-1000 p-3 rounded-md'>Instagram</button>
            </div>
            <div className="right text-sm"><button onClick={GenerateRandomQuote} className='transition-colors ease-in-out duration-1000 p-3 rounded-md' style={{backgroundColor:Backgroundcolor,color:'white'}}>New Quote</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
