
import Navbar from '../components/Navbar';
import TextP from '../components/TextP';
import Footer from '../components/Footer'; 


export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <TextP />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
