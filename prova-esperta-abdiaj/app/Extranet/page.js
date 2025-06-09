// app/page.js
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import Login from '../components/Login';

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
