import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import DarkMode from './Context/DarkMode';
import Hero from './Main/Hero/Hero';
import Section2 from './Main/Section2/Section2';
import Section3 from './Main/Section3/Section3';
import Section4 from './Main/Section4/Section4';
import Section5 from './Main/Section5/Section5';
import Section6 from './Main/Section6/Section6';
import Section7 from './Main/Section7/Section7';
import Section8 from './Main/Section8/Section8';
import Section9 from './Main/Section9/Section9';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <DarkMode>
      <Layout>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Layout>
    </DarkMode>
  )
}

export default App
