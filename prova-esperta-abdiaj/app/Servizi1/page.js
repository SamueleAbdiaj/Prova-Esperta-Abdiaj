
import Navbar from '../components/Navbar'; 
import S1 from '../components/S1'; 
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <S1 />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
