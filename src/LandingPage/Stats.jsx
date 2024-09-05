import { stats } from "../constants"
import styles from "../style"


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-row flex-wrap sm:mb-20 mb-6 max-md:flex-col max-md:gap-5`}>
      {stats.map(({id,title,value})=>(
        <div key={id} className="flex flex-1 justify-start items-center flex-row">
          <h4 className={`text-[30px] font-bold font-poppins xs:text-[40px] xs:leading-[53px] leading-[43px] text-white`}>{value}</h4>
          <p className="text-[15px] font-poppins font-normal xs:text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{title}</p>
        </div>
      ))}
      
    </section>
  )
}

export default Stats
