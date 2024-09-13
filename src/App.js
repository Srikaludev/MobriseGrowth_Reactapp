import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import CustomLogoSection from './components/customlogo';
import CompanyTeam from './components/companyteam';
import Livechat from './components/Livechat';
import RecentWork from './components/recentwork';
import HowItWorks from './components/howitworks';
import PinkZone from './components/pinkzone';
import PricePackages from './components/pricepackage';
import BlogPosts from './components/BlogPosts';
import TeamSection from './components/TeamSection';
import Brandstratergy from './components/BrandStratergy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <CustomLogoSection />
            <CompanyTeam />
            <Livechat/>
            <RecentWork />
            <HowItWorks />
            <PinkZone />
            <PricePackages />
            <BlogPosts />
            <TeamSection />
            <Brandstratergy />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default App;
