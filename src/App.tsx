import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import Plans from './components/Plans';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Testimonials />
        <Plans />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;