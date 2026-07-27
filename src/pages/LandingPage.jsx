import React from 'react'
import Header from '../components/landingPage/Header'
import HeroSection from '../components/landingPage/HeroSection'
import ScreenPreview from '../components/landingPage/ScreenPreview'
import StatsStrip from '../components/landingPage/StatsStrip'
import FeaturesSection from '../components/landingPage/FeaturesSection'
import HowItWorks from '../components/landingPage/HowItWorks'
import AiHighlights from '../components/landingPage/AiHighlights'
import Testimonials from '../components/landingPage/Testimonials'
import Footer from '../components/landingPage/Footer'


function LandingPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <StatsStrip/>
            <FeaturesSection/>
            <HowItWorks/>
            <AiHighlights/>
            <ScreenPreview/>
           < Testimonials/>
           <Footer/>

        </>
    )
}

export default LandingPage
