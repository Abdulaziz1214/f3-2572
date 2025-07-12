import React from 'react'

const Inputs = () => {
  return (
 

    <div className='w-[1512px] text-[white] '>
      <div className= 'pt-[60px] w-[1312px] h-[442px] bg-gradient-to-bl from-[#43A548] to-[#52E259] rounded-[40px] gap-[77px] flex mx-auto mt-10'>

<div className=' ml-[60px]'>
  <h2 className='text-[32px] w-[541px] h-[90px]'>Хотите бесплатную консультацию? 
Оставляйте заявку</h2>
<p className='text-[20px] h-[56px] w-[504px] mt-[25px]'>Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время </p>
</div>





<div className='text-[16px]'>
  <div>
  <p>Ваше имя</p>
    <input type="text" placeholder='ваше имя' className='text-[black] pl-[20px] rounded-[20px] w-[574px] h-[42px] bg-[white]'/>
  </div>

    <div className='mt-[20px]'>
  <p>Ваш телефон</p>
    <input type="text" placeholder='Ваш телефон' className='text-[black] pl-[20px] rounded-[20px] w-[574px] h-[42px] bg-[white]'/>
  </div>

    <div className='mt-[20px]'>
  <p>Ваш e-mail</p>
    <input type="text" placeholder='Ваш e-mail' className='text-[black] pl-[20px] rounded-[20px] w-[574px] h-[42px] bg-[white]'/>
  </div>

  <button className='w-[180px] h-[46px] text-[#43A548] bg-[white] rounded-[1000px] mt-[20px] ml-[394px]'>Отправить</button>
</div>
      </div>

    </div>



  )
}

export default Inputs