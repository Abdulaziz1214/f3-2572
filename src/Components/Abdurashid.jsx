import React from 'react'

const Abdurashid = () => {
  return (
    <div className='bg-green-200 w-100% h-[100vh]'>
      <div className='flex justify-between items-center ml-[40px] mr-[40px] pt-[20px] mb-[20px]'>
          <h1 className='text-2xl font-bold'>Популярные продукты</h1>
          <button className='w-[150px] h-[35px] bg-green-500 rounded-2xl text-white'>Все продукты</button>        
      </div>

      <div className='justify-evenly flex flex-wrap gap-10 ml-[40px] mr-[40px]'>

        <div className='bg-white w-[450px] h-[333px] rounded-4xl shadow-lg mb-[20px] p-[20px]'>
          <div className='flex gap-40 mb-[10px]'>
          <h2 className='text-xl font-bold'>1С-Товары 300</h2>
          <h2 className='w-[103px] h-[26px] pl-[5px] text-green-500 border-green-500 border-2 rounded-2xl'>400 руб мес</h2>            
          </div>
          <div>
            <ul className='list-disc ml-[20px]'>
              <li>Прогноз спроса с исползованием сервера <br /> прогнозирования (ограничение - 300 товаров)</li>
              <li>Контроль товарных остатков и автоматический <br /> заказ товаров (ограничение - 300 товаров)</li>
              <li>Анализ работы разнизного магазина или сети <br /> магазинов</li>
              <li>Рекомендации по управлению ассортиментом <br /> (1С-Ритейл Чекер)</li>
            </ul>
            <h2 className='text-end text-green-500 pt-[30px]'>Подробнее →</h2>
          </div>
        </div>

                <div className='bg-white w-[450px] h-[333px] rounded-4xl shadow-lg mb-[20px] p-[20px]'>
          <div className='flex gap-40 mb-[10px]'>
          <h2 className='text-[15px] font-bold'>1С-Товары 30000</h2>
          <h2 className='w-[117px] h-[26px] pl-[5px] text-green-500 border-green-500 border-2 rounded-2xl'>1 700 руб мес</h2>            
          </div>
          <div>
            <ul className='list-disc ml-[20px]'>
              <li>Прогноз спроса с исползованием сервера <br /> прогнозирования (ограничение - 300 товаров)</li>
              <li>Контроль товарных остатков и автоматический <br /> заказ товаров (ограничение - 300 товаров)</li>
              <li>Анализ работы разнизного магазина или сети <br /> магазинов</li>
              <li>Рекомендации по управлению ассортиментом <br /> (1С-Ритейл Чекер)</li>
            </ul>
            <h2 className='text-end text-green-500 pt-[30px]'>Подробнее →</h2>
          </div>
        </div>

                <div className='bg-white w-[450 px] h-[333px] rounded-4xl shadow-lg mb-[20px] p-[20px]'>
          <div className='flex gap-40 mb-[10px]'>
          <h2 className='text-[16px] font-bold'>1С-Товары</h2>
          <h2 className='w-[117px] h-[26px] pl-[5px] text-green-500 border-green-500 border-2 rounded-2xl'>4 500 руб мес</h2>            
          </div>
          <div>
            <ul className='list-disc ml-[20px]'>
              <li>Прогноз спроса с исползованием сервера <br /> прогнозирования (ограничение - 300 товаров)</li>
              <li>Контроль товарных остатков и автоматический <br /> заказ товаров (ограничение - 300 товаров)</li>
              <li>Анализ работы разнизного магазина или сети <br /> магазинов</li>
              <li>Рекомендации по управлению ассортиментом <br /> (1С-Ритейл Чекер)</li>
            </ul>
            <h2 className='text-end text-green-500 pt-[30px]'>Подробнее →</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Abdurashid
