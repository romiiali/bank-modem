
import NavBar from './LandingPage/Navbar';
import Billing from "./LandingPage/Billing";
import CardDeal from "./LandingPage/CardDeal";
import Business from "./LandingPage/Business";
import Clients from "./LandingPage/Clients";
import CTA from "./LandingPage/CTA";
import Stats from "./LandingPage/Stats";
import Footer from "./LandingPage/Footer";
import Testimonials from "./LandingPage/Testimonials";
import Hero from "./LandingPage/Hero";
import styles from './style'

const App = () => (
  <div className="bg-primary w-full overflow-hidden text-white">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </div>
    </div>
    <div className='bg-black'>
        <Footer />
        </div>
  </div>
);

export default App;