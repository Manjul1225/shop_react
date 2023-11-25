import Carousel from '../components/Home/Carousel';
import PromoBanner from '../components/Home/PromoBanner';
import Shop from '../components/Home/Shop/Shop';
import img1 from '/src/images/banner1.webp';
import img2 from '/src/images/banner2.webp'
import img3 from '/src/images/banner3.webp'
import img4 from '/src/images/banner4.webp'

export default function Home() {

  return (
    <main>
        <div className='flex items-center content-center justify-center pt-16'>
          <Carousel>
            <img src={img1} alt="banner 1" key={789456} style={{width: '100%', height: '100%'}}/>
            <img src={img2} alt="banner 2" key={789457} style={{width: '100%', height: '100%'}}/>
            <img src={img3} alt="banner 3" key={789458} style={{width: '100%', height: '100%'}}/>
            <img src={img4} alt="banner 4" key={789459} style={{width: '100%', height: '100%'}}/>
          </Carousel>
        </div>
        <Shop />
        <PromoBanner>
          LIMITED TIME OFFER SALE DISCOUNT UP TO 50% OFF !!!
        </PromoBanner>
    </main>
  )
}
