import React from 'react'
import Button from './Button'
import styles from '../style'
import { features } from '../constants'

const Business = () => {
  return (
    <section className={`flex gap-12 max-md:flex-col ${styles.paddingY} max-md:${styles.padding}`}>
      <div className={`${styles.paddingY} flex flex-col leading-7 h-full justify-between`}>
        <h2 className={`${styles.heading2}`}>You do the business, 
          <br/> we'll handle the money.</h2>
        <p className={`${styles.paragraph} pb-5`}>With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.</p>
        <Button/>
      </div>
      <div className={`grid grid-rows-3 w-full gap-5 max-md:gap-10`}>
        {features.map(({id,icon,title,content})=>(
          <div key={id} className={`flex flex-row justify-center items-center gap-5 shadow-dimWhite shadow-2xl rounded-xl p-3 max-md:p-6`}>
            <div className=''>
              <img src={icon} alt='icon'/>
            </div>
            <div className='leading-normal'>
              <h3 className='text-xl font-poppins font-semibold'>{title}</h3>
              <p className={`font-poppins font-normal text-dimWhite`}>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Business
