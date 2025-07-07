import React from 'react'
import CategoryGrid from '../ChooseByType/ChooseByCtegory'
import ProductSlider from '../FeaturedProducts/FeaturedProducts'
import Benifits from '../Benifits/Benifits'
import Delivey from '../Benifits/Delivey'
import ReviewSlider from '../Clients/Clients'
import FAQs from '../FAQS/Faqs'

function Home() {
  return (
    <>
    <CategoryGrid/>
    <ProductSlider/>
    <Benifits/>
    <Delivey/>
    <ReviewSlider/>
    <FAQs/>
    
    </>
  )
}

export default Home