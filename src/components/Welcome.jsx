import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from './Loader';

const Welcome = () => {
  const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );


  const handleSubmit = (e) => {
    
  }

  return (
    <div className='h-screen w-full flex flex-col'>
      <div className='w-full justify-center flex p-2'>
        <h1 className='text-3xl sm:text-6xl mt-20 sm:mt-56 text-[#c85d5d] text-gradient py-1'>Send Ethereum</h1>
      </div>


      <div className='flex justify-center py-4'> 
      <div className=' p-3 rounded-xl h-[200px] w-80  my-5 eth-card white-glassmorphism '>
      <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm text-gradient">
                  address
                </p>
                <p className="text-white font-semibold text-lg mt-1 text-gradient">
                  Ethereum
                </p>
              </div>
            </div>
        </div>
      </div>
      
      <div className='flex justify-center py-4'>
        <div className='p-6 w-80 sm:w-96 flex flex-col justify-start items-center blue-glassmorphism'>
        <Input placeholder="Address To" name="addressTo" type="text"  />
        <Input placeholder="Amount (ETH)" name="amount" type="number"  />
        <Input placeholder="Keyword (Gif)" name="keyword" type="text" />
        <Input placeholder="Enter Message" name="message" type="text"/>

          {false ? ( 
            <Loader />
          ) : (
            <div className='py-4'>
          
            <button type='button' className='border-2 text-center border-[#5d89ee] hover:text-[#c85d5d]  mx-4 py-2 px-7 rounded-full cursor-pointer text-[#FFF] hover:bg-[#2546bd]"' onClick={handleSubmit}>Submit </button>
           </div>)}
        </div>

      </div>

      

      </div>
  )
}

export default Welcome