import React from 'react'
import { clients } from '../constants'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className='mb-7'>
      <div className={`${styles.flexCenter} ${styles.padding}`}>
        {clients.map(({id,logo})=>(
          <div key={id} className='p-5'>
            <img src={logo}/>
          </div>
        ))}
      </div>
      <div className={`bg-slate-900 ${styles.padding}  flex flex-row justify-between rounded-2xl items-center
        max-md:flex-col`}>
        <div className=''>
          <h2 className={`${styles.heading2}`}>Lets try our service now!</h2>
          <p className={`${styles.paragraph} mt-3 max-md:text-center`}>Everything you need to accept card payments <br/>and grow your business
          anywhere on the planet.</p>
        </div>
        <div className='max-md:mt-5'><Button/></div>
      </div>
    </section>
  )
}

export default CTA
