import MapPage from '@/components/map/page'
import CoffeeShop from '@/components/coffeeShop/page'
import { CartProvider } from '@/context/cartProvider'
import CartDisplay from '@/components/coffeeShop/cartDisplay'
import SwiperPage from '@/components/swiper/page'
import MenuPage from '@/components/menu/page'
import FooterPage from '@/components/footer/page'
import NavbarPage from '@/components/navbar/page'
import ResendPage from '@/components/resend/page'


function HomePage(){
  return(
  <div >
     
    <MapPage />
    <CartProvider>
    <NavbarPage />
    <CoffeeShop />
    <CartDisplay />
    </CartProvider>
    <SwiperPage />
    <MenuPage />
    <ResendPage />
    <FooterPage />
   
  </div>
  )
}

export default HomePage