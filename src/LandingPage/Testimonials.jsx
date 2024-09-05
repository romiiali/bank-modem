import React from 'react'
import styles from '../style'

const Testimonials = () => {
  return (
    <section className='flex flex-row justify-between items-center max-md:flex-col max-md:w-full max-md:text-center'>
      <h2 className={`${styles.heading2}`}>What people are <br/>saying about us</h2>
      <p className={`${styles.paragraph}`}>Everything you need to accept card payments and grow your business
      anywhere on the planet.</p>
    </section>
  )
}

export default Testimonials
