import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <div className='w-full justify-center flex p-2'>
        <h1 className='text-2xl sm:text-6xl mt-56 text-[#c85d5d] text-gradient py-1'>Send Ethereum</h1>
      </div>

      <div className='flex justify-center'> 
      <div className=' p-3 rounded-xl h-[200px] sm:w-80 w-full my-5 eth-card white-glassmorphism'>
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
        <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>


        </div>
      

      <div className='justify-center flex p-4'>
      <a className="border-2 text-center border-[#5d89ee] hover:text-[#c85d5d]  mx-4 py-2 px-7 rounded-full cursor-pointer text-[#FFF] hover:bg-[#2546bd]"> Connect Wallet </a>
      </div>

      </div>
  )
}

export default Welcome