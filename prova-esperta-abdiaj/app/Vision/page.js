
import Navbar from '../components/Navbar'; 
import V1 from '../components/V1'; 
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <V1 />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
