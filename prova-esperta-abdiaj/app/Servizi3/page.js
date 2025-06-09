
import Navbar from '../components/Navbar'; 
import S3 from '../components/S3'; 
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <S3 />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
