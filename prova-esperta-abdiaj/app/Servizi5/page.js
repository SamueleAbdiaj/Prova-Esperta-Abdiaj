
import Navbar from '../components/Navbar'; 
import S5 from '../components/S5'; 
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <S5 />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
