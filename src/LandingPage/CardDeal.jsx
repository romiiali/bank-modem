import React from 'react'
import Button from './Button'
import { card } from '../assets'
import styles from '../style'

const CardDeal = () => {
  return (
    <section className={`flex flex-row flex-1 justify-between w-full mt-10 mb-10 max-md:flex-col`}>
      <div className={` flex flex-col gap-10`}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br/> few easy steps</h2>
        <p className={`${styles.paragraph}`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button/>
      </div>
      <div className={`max-md:mt-10`}>
        <img src={card} alt='card'/>
      </div>
    </section>
  )
}

export default CardDeal
