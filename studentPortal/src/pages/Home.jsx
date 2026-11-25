import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar'
import MainPage from './MainPage'
import Footer from '../components/Footer';

function Home() {
  const input = useRef(false);

  useEffect(() => {
    if (!input.current) {
      alert("Welcome to Student Portal!!");
      input.current = true;
    }
  }, []);



  return (
    <div>
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  )
}

export default Home
