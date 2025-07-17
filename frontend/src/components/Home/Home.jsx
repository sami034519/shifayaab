import React from 'react'
import CategoryGrid from '../ChooseByType/ChooseByCtegory'
import ProductSlider from '../FeaturedProducts/FeaturedProducts'
import Benifits from '../Benifits/Benifits'
import Delivey from '../Benifits/Delivey'
import ReviewSlider from '../Clients/Clients'
import FAQs from '../FAQS/Faqs'
import ImageCarousel from '../heroslider/Herolsider'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'

function Home() {
  return (
    <>
    <ImageCarousel/>
    <WhyChooseUs/>
    <ProductSlider/>
    <CategoryGrid/>
    
    <Benifits/>
    <Delivey/>
    <ReviewSlider/>
    <FAQs/>
    
    </>
  )
}

export default Home