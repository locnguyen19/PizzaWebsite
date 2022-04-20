


import Footer from './Component/Footer';
import Header from './Component/Header';
import NewsLetters from './Component/NewsLetters';

import Service from './Component/Service';
import SlideCarousel from './Component/SlideCarousel';
import Cart from './Component/Cart/Cart'
import Pagination from './Component/Pagination';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <SlideCarousel></SlideCarousel>
      <Service></Service>
     <Pagination></Pagination>
   <NewsLetters></NewsLetters>
   <Footer></Footer>
   <Cart></Cart>
    </div>
  );
}

export default App;
