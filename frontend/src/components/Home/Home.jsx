import React from 'react'
import CategoryGrid from '../ChooseByType/ChooseByCtegory'
import ProductSlider from '../FeaturedProducts/FeaturedProducts'
import Benifits from '../Benifits/Benifits'
import Delivey from '../Benifits/Delivey'
import ReviewSlider from '../Clients/Clients'
import FAQs from '../FAQS/Faqs'
import ContactUs from '../CONTACTus/Contactus'
function Home() {
  return (
    <>
    <CategoryGrid/>
    <ProductSlider/>
    <Benifits/>
    <Delivey/>
    <ReviewSlider/>
    <FAQs/>
    <ContactUs/>
    </>
  )
}

export default Home