
import Navbar from '../components/Navbar'; 
import S4 from '../components/S4'; 
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <S4 />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
