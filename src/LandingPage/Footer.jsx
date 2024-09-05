import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'
import styles from '../style'

const Footer = () => {
  return (
    <footer className={`${styles.padding}`}>
      <div className={`flex flex-row justify-between items-center py-10`}>
        <div>
          <img src={logo} alt='logo'/>
          <p className='text-dimWhite mt-3'>A new way to make payments <br/>easy, relaiable and secure.</p>
        </div>
        <div className='grid grid-cols-3 gap-16'>
          {footerLinks.map((footerLinks)=>(
            <div key={footerLinks.title} className={``}>
              <p className='mb-4 text-xl'>{footerLinks.title}</p>
              <ul>{footerLinks.links.map((urls)=>(
                <li className='text-dimWhite m-2'>
                  <a href={urls.link}>{urls.name}</a>
                </li>
              ))}</ul>
            </div>
          ))}
        </div>
      </div>
      <hr/>
      <div className='flex flex-row justify-between mt-5'>
      <p className='text-dimWhite'>Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
      <div className='flex flex-row gap-5'>
        {socialMedia.map((app)=>(
          <a key={app.id} href={app.link}>
            <img src={app.icon}/>
          </a>
        ))}
      </div>
      </div>
    </footer>
  )
}

export default Footer
