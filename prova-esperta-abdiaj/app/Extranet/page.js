
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Footer from '../components/Footer'; 


export default function Home() {
  return (
    <> 
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <Login />
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
}
