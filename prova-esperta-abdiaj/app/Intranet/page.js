
import Navbar from '../components/Navbar';
import Login2 from '../components/Login2';
import Footer from '../components/Footer'; 


export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <Login2 />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
