import React from 'react'
import sth from '../assets/sth.png'
const Zarina = () => {
  return (
    <div className=' w-[1512px] h-[566px] '>
      <header className='w-[1312px] flex  gap-[158px] items-center mx-auto h-[451px] mt-[55px] '>
        <div className=' w-[646px] h-[280px] '>
          <h1 className='w-[646px] h-[132px]  font-semibold text-6xl'>Управление запасами розничного магазина</h1>
          <p className='w-[670px] h-[56px] mt-[20px] font-normal text-2xl'>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
          <button className='mt-[30px] w-[249px] h-[42px] bg-gradient-to-r from-[#43A548] to-[#52E259] text-white text-base font-semibold rounded-full '>Заказать демонстрацию</button>
        </div>
        <img src={sth} alt="" />
      </header>
    </div>
  )
}

export default Zarina