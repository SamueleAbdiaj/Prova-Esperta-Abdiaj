
import Navbar from '../components/Navbar'; 
import S2 from '../components/S2'; 
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <S2 />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
