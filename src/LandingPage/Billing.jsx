import React from 'react'
import { apple, bill, google } from '../assets'
import styles from '../style'

const Billing = () => {
  return (
    <section className={`flex flex-row ${styles.padding} gap-10 max-md:flex-col justify-between`}>
      <div>
      <div className="absolute z-[0] w-[50%] h-[50%] left-[-200px] pink__gradient" />
        <img src={bill} alt='bill' className='z-[1]'/>
      </div>
      <div className={`${styles.flexCenter} flex-col `}>
        <h2 className={`${styles.heading2}`}>Easily control your billing & invoicing</h2>
        <p className={`${styles.paragraph} pb-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.</p>
        <div className='flex flex-row justify-start gap-3 w-full'>
          <img src={apple} alt='apple play'/>
          <img src={google} alt='google play'/>
        </div>
      </div>
    </section>
  )
}

export default Billing
