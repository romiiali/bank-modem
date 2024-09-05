import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import { quotes } from '../assets'

const Clients = () => {
  return (
    <section className={`grid grid-cols-3 gap-10 ${styles.padding} max-md:grid-cols-2 max-md:w-full max-sm:grid-cols-1`}>
      {feedback.map(({ id, content, customer, title, img }) => (
        <div key={id} className={`${styles.flexStart} flex-col justify-between gap-10 p-10 shadow-2xl shadow-dimWhite rounded-2xl`}>
          <img src={quotes} alt='quotes' className='w-[25p] h-[25px]'/>
          <p className={`${styles.paragraph} text-white font-semibold`}>{content}</p>
          <div className='flex flex-row justify-center items-center gap-5'>
            <img src={img} alt='customer' className='rounded-full w-[50px] h-[50px]'/>
            <div className='flex flex-col justify-start'>
              <p className='font-poppins font-semibold'>{customer}</p>
              <p className='text-dimWhite'>{title}</p>
            </div>
          </div>
        </div>
      ))}
  </section>
  )
}

export default Clients
